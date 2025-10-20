// Mock data for Business Automation Platform

export interface ProcessStep {
  id: string;
  name: string;
  type: 'action' | 'decision' | 'approval' | 'automation';
  status: 'pending' | 'in_progress' | 'completed' | 'blocked';
  duration?: string;
  assignee?: string;
}

export interface Process {
  id: string;
  name: string;
  description: string;
  category: 'finance' | 'hr' | 'support' | 'operations';
  status: 'active' | 'paused' | 'completed';
  steps: ProcessStep[];
  metrics: {
    originalTime: string;
    automatedTime: string;
    timeSaved: string;
    completionRate: number;
    currentStep: number;
    totalSteps: number;
  };
  createdAt: string;
  lastUpdated: string;
}

export interface ProcessTemplate {
  id: string;
  name: string;
  description: string;
  category: 'finance' | 'hr' | 'support' | 'operations';
  estimatedTimeSaving: string;
  stepCount: number;
  icon: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'approval' | 'completion' | 'alert' | 'info';
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface AnalyticsData {
  monthlyTimeSaved: number;
  processCompletionRate: number;
  averageResolutionTime: number;
  activeProcesses: number;
  completedThisMonth: number;
  trendData: {
    labels: string[];
    timeSaved: number[];
    completionRate: number[];
  };
}

// Process Templates
export const processTemplates: ProcessTemplate[] = [
  {
    id: 'invoice_approval',
    name: 'Invoice Approval Sequence',
    description: 'Automated invoice routing with conditional approval based on amount thresholds',
    category: 'finance',
    estimatedTimeSaving: '3.2 days → 4.5 hours',
    stepCount: 8,
    icon: 'FileText'
  },
  {
    id: 'employee_onboarding',
    name: 'Employee Onboarding Automation',
    description: 'Complete new hire setup from offer acceptance to first day readiness',
    category: 'hr',
    estimatedTimeSaving: '12 manual tasks → 2 approvals',
    stepCount: 12,
    icon: 'UserPlus'
  },
  {
    id: 'support_escalation',
    name: 'Customer Support Escalation',
    description: 'Intelligent ticket routing and escalation based on priority and type',
    category: 'support',
    estimatedTimeSaving: '85% auto-routed',
    stepCount: 6,
    icon: 'MessageSquare'
  },
  {
    id: 'purchase_order',
    name: 'Purchase Order Routing',
    description: 'Automated PO approval workflow with multi-level authorization',
    category: 'finance',
    estimatedTimeSaving: '3.2 days → 4.5 hours',
    stepCount: 8,
    icon: 'ShoppingCart'
  }
];

// Active Processes
export const activeProcesses: Process[] = [
  {
    id: 'proc_001',
    name: 'Q4 Invoice Approval Batch',
    description: '23 invoices pending approval from multiple vendors',
    category: 'finance',
    status: 'active',
    steps: [
      {
        id: 'step_1',
        name: 'Vendor Invoice Received',
        type: 'action',
        status: 'completed'
      },
      {
        id: 'step_2',
        name: 'Automated Validation',
        type: 'automation',
        status: 'completed',
        duration: '2 min'
      },
      {
        id: 'step_3',
        name: 'Manager Approval',
        type: 'approval',
        status: 'in_progress',
        assignee: 'Sarah Johnson'
      },
      {
        id: 'step_4',
        name: 'Finance Review',
        type: 'approval',
        status: 'pending',
        assignee: 'Michael Chen'
      },
      {
        id: 'step_5',
        name: 'Payment Processing',
        type: 'automation',
        status: 'pending'
      }
    ],
    metrics: {
      originalTime: '3.2 days',
      automatedTime: '4.5 hours',
      timeSaved: '86%',
      completionRate: 94.3,
      currentStep: 3,
      totalSteps: 5
    },
    createdAt: '2025-10-15',
    lastUpdated: '2025-10-20T08:30:00Z'
  },
  {
    id: 'proc_002',
    name: 'New Employee Onboarding - Sarah Williams',
    description: 'Complete onboarding process for new Marketing Manager',
    category: 'hr',
    status: 'active',
    steps: [
      {
        id: 'step_1',
        name: 'Offer Letter Sent',
        type: 'action',
        status: 'completed'
      },
      {
        id: 'step_2',
        name: 'Background Check',
        type: 'automation',
        status: 'completed',
        duration: '24 hours'
      },
      {
        id: 'step_3',
        name: 'Equipment Provisioning',
        type: 'automation',
        status: 'completed',
        duration: '1 hour'
      },
      {
        id: 'step_4',
        name: 'System Access Setup',
        type: 'automation',
        status: 'in_progress',
        duration: '15 min'
      },
      {
        id: 'step_5',
        name: 'Manager Onboarding Review',
        type: 'approval',
        status: 'pending',
        assignee: 'Jennifer Lee'
      }
    ],
    metrics: {
      originalTime: '5 days',
      automatedTime: '1.5 days',
      timeSaved: '70%',
      completionRate: 90.0,
      currentStep: 4,
      totalSteps: 5
    },
    createdAt: '2025-10-18',
    lastUpdated: '2025-10-20T09:15:00Z'
  },
  {
    id: 'proc_003',
    name: 'Support Ticket Classification',
    description: 'Automated routing for 156 customer support tickets',
    category: 'support',
    status: 'active',
    steps: [
      {
        id: 'step_1',
        name: 'Ticket Received',
        type: 'action',
        status: 'completed'
      },
      {
        id: 'step_2',
        name: 'AI Classification',
        type: 'automation',
        status: 'completed',
        duration: '< 1 sec'
      },
      {
        id: 'step_3',
        name: 'Priority Assignment',
        type: 'decision',
        status: 'completed',
        duration: '< 1 sec'
      },
      {
        id: 'step_4',
        name: 'Specialist Routing',
        type: 'automation',
        status: 'in_progress'
      }
    ],
    metrics: {
      originalTime: '45 min avg',
      automatedTime: '2 min avg',
      timeSaved: '96%',
      completionRate: 98.5,
      currentStep: 4,
      totalSteps: 4
    },
    createdAt: '2025-10-20',
    lastUpdated: '2025-10-20T10:00:00Z'
  }
];

// Notifications
export const notifications: Notification[] = [
  {
    id: 'notif_001',
    title: 'Approval Required',
    message: 'Purchase Order PO-4521 requires your approval',
    type: 'approval',
    timestamp: '2025-10-20T09:30:00Z',
    read: false,
    actionUrl: '/operations?process=proc_001'
  },
  {
    id: 'notif_002',
    title: 'Onboarding Step Completed',
    message: 'Sarah Williams has completed equipment setup',
    type: 'completion',
    timestamp: '2025-10-20T08:45:00Z',
    read: false,
    actionUrl: '/operations?process=proc_002'
  },
  {
    id: 'notif_003',
    title: 'Monthly Efficiency Report Ready',
    message: 'Your October 2025 performance metrics are available',
    type: 'info',
    timestamp: '2025-10-20T07:00:00Z',
    read: true,
    actionUrl: '/analytics'
  },
  {
    id: 'notif_004',
    title: 'Process Bottleneck Detected',
    message: '5 invoices pending manager approval for 48+ hours',
    type: 'alert',
    timestamp: '2025-10-19T16:00:00Z',
    read: true,
    actionUrl: '/operations'
  }
];

// Analytics Data
export const analyticsData: AnalyticsData = {
  monthlyTimeSaved: 847,
  processCompletionRate: 94.3,
  averageResolutionTime: 67,
  activeProcesses: 23,
  completedThisMonth: 156,
  trendData: {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    timeSaved: [320, 445, 580, 692, 765, 847],
    completionRate: [87.5, 89.2, 91.3, 92.8, 93.5, 94.3]
  }
};

// Helper Functions
export const getCategoryColor = (category: Process['category']) => {
  const colors = {
    finance: 'text-blue-600 bg-blue-50',
    hr: 'text-purple-600 bg-purple-50',
    support: 'text-green-600 bg-green-50',
    operations: 'text-orange-600 bg-orange-50'
  };
  return colors[category];
};

export const getStatusColor = (status: Process['status']) => {
  const colors = {
    active: 'text-green-600 bg-green-50',
    paused: 'text-amber-600 bg-amber-50',
    completed: 'text-gray-600 bg-gray-50'
  };
  return colors[status];
};

export const getStepStatusIcon = (status: ProcessStep['status']) => {
  const icons = {
    pending: 'Clock',
    in_progress: 'Loader',
    completed: 'CheckCircle2',
    blocked: 'AlertTriangle'
  };
  return icons[status];
};
