---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: New-ApplicationAccessPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# New-ApplicationAccessPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-ApplicationAccessPolicy cmdlet to restrict or deny access for an application that is using Outlook Rest APIs or Microsoft Graph APIs to a specific set of mailboxes. These policies are complimentary to the permission scopes that are declared by the application.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-ApplicationAccessPolicy -AccessRight <RestrictAccess | DenyAccess> -AppId <String[]> -PolicyScopeGroupId <RecipientIdParameter>
 [-Confirm]
 [-Description <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

Use the New-ApplicationAccessPolicy cmdlet to restrict or deny access for an application that is using Outlook Rest APIs or Microsoft Graph APIs to a specific set of mailboxes. These policies are complimentary to the permission scopes that are declared by the application.

While the scope-based resource access like Mail.Read or Calendar.Read is effective to ensure that the application can only read mails or events within a mailbox and not do anything else; Application Access Policy feature allows admins to enforce limits that are based on a list of mailboxes. For example, in a global organization apps developed for one country shouldn’t have access to data from other countries or a CRM integration application should only access calendar of the Sales organization and no other departments.

Every API request using the Outlook Rest APIs or Microsoft Graph APIs to a target mailbox done by an application is verified using the following rules (in the same order):

1. If there are multiple application access policies for the same Application and Target Mailbox pair, DenyAccess policy is prioritized over a RestrictAccess policy.

2. If a DenyAccess policy exists for the Application and Target Mailbox, then the app's access request is denied (even if there exists a RestrictAccess policy).

3. If there are any RestrictAccess policies that match the Application and Target Mailbox, then the app is granted access.

4. If there are any Restrict policies for the Application, and the Target Mailbox is not a member of those policies, then application is denied access to the target mailbox.

5. If none of the above conditions are met, then the application is granted access to the requested target mailbox.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ApplicationAccessPolicy -AccessRight DenyAccess -AppId 3dbc2ae1-7198-45ed-9f9f-d86ba3ec35b5,6ac794ca-2697-4137-8754-d2a78ae47d93 -PolicyScopeGroupId "Engineering Staff" -Description "Engineering Group Policy"
```

This example creates a new application access policy with the following settings:

- AccessRight: DenyAccess

- AppIDs: 3dbc2ae1-7198-45ed-9f9f-d86ba3ec35b5 and 6ac794ca-2697-4137-8754-d2a78ae47d93

- PolicyScopeGroupId: Engineering Staff

- Description: Engineering Group Policy

### -------------------------- Example 2 --------------------------
```
New-ApplicationAccessPolicy -AccessRight RestrictAccess -AppId e7e4dbfc-046f-4074-9b3b-2ae8f144f59b -PolicyScopeGroupId EvenUsers@AppPolicyTest2.com -Description "Restrict this app to members of security group EvenUsers."
```

This example creates a new application access policy with the following settings:

- AccessRight: RestrictAccess

- AppIDs: e7e4dbfc-046f-4074-9b3b-2ae8f144f59b

- PolicyScopeGroupId: EvenUsers@AppPolicyTest2.com

- Description: Restrict this app to members of security group EvenUsers.



### -------------------------- Example 3 --------------------------
```
New-ApplicationAccessPolicy -AccessRight DenyAccess -AppId e7e4dbfc-046f-4074-9b3b-2ae8f144f59b -PolicyScopeGroupId OddUsers@AppPolicyTest2.com -Description "Deny this app access to members of security group OddUsers."
```

This example creates a new application access policy with the following settings:

- AccessRight: DenyAccess

- AppIDs: e7e4dbfc-046f-4074-9b3b-2ae8f144f59b

- PolicyScopeGroupId: OddUsers@AppPolicyTest2.com

- Description: Deny this app access to members of security group OddUsers.

## PARAMETERS

### -AccessRight
The AccessRight parameter specifies the permission that you want to assign in the application access policy. Valid values are:

- RestrictAccess

- DenyAccess

```yaml
Type: ApplicationAccessPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppId
The Identity parameter specifies the GUID of the apps to include in the policy. To find the GUID value of an app, run the command Get-App | Format-Table -Auto DisplayName,AppId.

You can specify multiple app GUID values separated by commas or you can specify * to indicate all applications.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PolicyScopeGroupID
The PolicyScopeGroupID parameter specifies the recipient to define in the policy. You can use any value that uniquely identifies the recipient. You can also specify a mail enabled security group to restrict/deny access to a large number of user mailboxes.
For example:

- Name

- Distinguished name (DN)

- Display name

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/new-applicationaccesspolicy)
