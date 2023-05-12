import type { ProjectDetails } from '@/domain/types/project.type'

export const cpqi9thGear: ProjectDetails = {
  key: 'cpqi-9th-gear',
  projectName: 'Financial Market Tool - 9th Gear',
  description: [
    'The main challenge was to improve an ongoing financial market tool to track and ensure the security of all transaction information. We’ve redesigned the entire frontend to fit the necessities of the users, we’ve applied many best practices in the backend, and a tool which generates the documentation based on comments.',
    'We’ve implemented many solutions to guarantee the application’s performance, security and scalability.'
  ],
  technologies: [
    'AWS',
    'CloudWatch',
    'Lambda',
    'CodeBuild',
    'CodePipeline',
    'S3',
    'SQS',
    'SNS',
    'EventBridge',
    'ApiGateway',
    'DynamoDB',
    'Node',
    'Typescript',
    'React',
    'SOLID',
    'Clean Architecture',
    'DRY',
    'Design Patterns'
  ],
  stats: [
    {
      increase: '+50000',
      description: 'Transactions Expected'
    }
  ],
  roles: [
    {
      role: 'Front-end',
      description:
        'We were responsible for restructure the entire front-end of the application, developing features which improved all the user experience, providing autonomy to the final user, fixing layout and functionality bugs.'
    },
    {
      role: 'Back-end',
      description:
        'We developed features to responsible for provide information for the front-end, guarantee the security of the transactions and deliver many functionalities consumed by the front-end of the application.'
    },
    {
      role: 'Engineering',
      description:
        'Created proof of concepts to implements structures, design patterns, conduct code reviews, technical refactors in order to keep the code readable and maintainable.'
    }
  ]
}

export const cpqiM7consigned: ProjectDetails = {
  key: 'cpqi-m7-consigned',
  projectName: 'M7 Consigned App - M7 Consigned',
  description: [
    'A healthcare institution with a challenge of improve its product and increase the number of schedules accomplished in its tool. We have done significant improvements on the main features, and developed from scratch a new section of features. The self-service functionalities are a group of features which provides autonomy to the clients by letting them interact directly with their schedules decreasing the calls to the call center.'
  ],
  technologies: [
    'AWS',
    'CloudWatch',
    'Lambda',
    'CodeBuild',
    'CodePipeline',
    'S3',
    'SQS',
    'SNS',
    'EventBridge',
    'Sensedia',
    'MongoDB',
    'ElasticSearch',
    'Node',
    'Typescript',
    'React',
    'Next.js',
    'SOLID',
    'Clean Architecture',
    'DRY',
    'Design Patterns'
  ],
  stats: [
    {
      increase: '+1200',
      description: 'Daily schedules'
    }
  ],
  roles: [
    {
      role: 'Front-end',
      description:
        'We were responsible for developing a brand new app and its features which improved the user experience, provided autonomy to the users and increased the number of users confident to use the service.'
    },
    {
      role: 'Engineering',
      description:
        'Created proof of concepts to implements structures, design patterns, technical refinement in order to keep the code readable and maintainable.'
    }
  ]
}