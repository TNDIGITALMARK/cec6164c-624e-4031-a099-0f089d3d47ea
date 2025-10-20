'use client';

import { useState } from 'react';
import { processTemplates } from '@/lib/mock-data';
import {
  Plus,
  Save,
  Play,
  Settings,
  Trash2,
  GitBranch,
  Square,
  Circle,
  Diamond,
  CheckCircle,
  ArrowRight,
  GripVertical
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  type: 'action' | 'decision' | 'approval' | 'automation';
  name: string;
  description: string;
}

const stepTypes = [
  { type: 'action', icon: Square, label: 'Action', color: 'bg-blue-500' },
  { type: 'automation', icon: Circle, label: 'Automation', color: 'bg-purple-500' },
  { type: 'decision', icon: Diamond, label: 'Decision', color: 'bg-amber-500' },
  { type: 'approval', icon: CheckCircle, label: 'Approval', color: 'bg-green-500' }
];

export default function BuilderPage() {
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([
    {
      id: '1',
      type: 'action',
      name: 'Trigger Event',
      description: 'Process starts when invoice is received'
    },
    {
      id: '2',
      type: 'automation',
      name: 'Data Validation',
      description: 'Automatically validate invoice data and format'
    },
    {
      id: '3',
      type: 'decision',
      name: 'Amount Check',
      description: 'Route based on invoice amount threshold'
    },
    {
      id: '4',
      type: 'approval',
      name: 'Manager Approval',
      description: 'Requires approval from department manager'
    },
    {
      id: '5',
      type: 'automation',
      name: 'Payment Processing',
      description: 'Automatically process payment and send confirmation'
    }
  ]);

  const addStep = (type: string) => {
    const newStep: WorkflowStep = {
      id: Date.now().toString(),
      type: type as WorkflowStep['type'],
      name: `New ${type} Step`,
      description: 'Configure this step'
    };
    setWorkflowSteps([...workflowSteps, newStep]);
  };

  const removeStep = (id: string) => {
    setWorkflowSteps(workflowSteps.filter(step => step.id !== id));
  };

  const getStepIcon = (type: string) => {
    const stepType = stepTypes.find(st => st.type === type);
    return stepType || stepTypes[0];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Process Builder</h1>
              <p className="mt-2 text-gray-600">
                Design automated workflows with drag-and-drop visual flows
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Draft
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Play className="w-4 h-4" />
                Activate Process
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Toolbox */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step Types</h3>
              <div className="space-y-3">
                {stepTypes.map((stepType) => {
                  const Icon = stepType.icon;
                  return (
                    <button
                      key={stepType.type}
                      onClick={() => addStep(stepType.type)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                    >
                      <div className={`w-10 h-10 ${stepType.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">{stepType.label}</p>
                        <p className="text-xs text-gray-500">Add to workflow</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Templates</h4>
                <div className="space-y-2">
                  {processTemplates.slice(0, 3).map((template) => (
                    <button
                      key={template.id}
                      className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <p className="text-xs font-medium text-gray-900">{template.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{template.stepCount} steps</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 min-h-[600px]">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Invoice Approval Workflow</h3>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                {workflowSteps.map((step, index) => {
                  const stepConfig = getStepIcon(step.type);
                  const Icon = stepConfig.icon;

                  return (
                    <div key={step.id}>
                      {/* Workflow Step */}
                      <div className="group relative bg-gradient-to-r from-white to-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md">
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            {/* Drag Handle */}
                            <div className="mt-2 cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
                              <GripVertical className="w-5 h-5 text-gray-400" />
                            </div>

                            {/* Step Icon */}
                            <div className={`w-14 h-14 ${stepConfig.color} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Step Content */}
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-3">
                                    <h4 className="text-lg font-semibold text-gray-900">{step.name}</h4>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                      {stepConfig.label}
                                    </span>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Settings className="w-4 h-4 text-gray-600" />
                                  </button>
                                  <button
                                    onClick={() => removeStep(step.id)}
                                    className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                  </button>
                                </div>
                              </div>

                              {/* Step Details */}
                              <div className="mt-4 flex items-center gap-4">
                                {step.type === 'decision' && (
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <GitBranch className="w-4 h-4" />
                                    <span>2 branches configured</span>
                                  </div>
                                )}
                                {step.type === 'approval' && (
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Requires 1 approval</span>
                                  </div>
                                )}
                                {step.type === 'automation' && (
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Circle className="w-4 h-4" />
                                    <span>Runs automatically</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Connector Arrow */}
                      {index < workflowSteps.length - 1 && (
                        <div className="flex justify-center py-2">
                          <div className="w-0.5 h-6 bg-gray-300"></div>
                          <ArrowRight className="w-6 h-6 text-gray-400 absolute" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Add Step Button */}
                <button className="w-full p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all group">
                  <div className="flex flex-col items-center gap-2">
                    <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                      Add Step to Workflow
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
