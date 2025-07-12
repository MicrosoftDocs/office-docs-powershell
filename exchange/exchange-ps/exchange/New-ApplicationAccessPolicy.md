---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-applicationaccesspolicy
applicable: Exchange Online, Exchange Online Protection
title: New-ApplicationAccessPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-ApplicationAccessPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

> [!IMPORTANT]
> App Access Policies will soon be replaced by Role Based Access Control for Applications. To learn more, see [Role Based Access Control for Exchange Applications](https://learn.microsoft.com/exchange/permissions-exo/application-rbac).

Use the New-ApplicationAccessPolicy cmdlet to restrict or deny access to a specific set of mailboxes by an application that uses APIs (Outlook REST, Microsoft Graph, or Exchange Web Services (EWS)). These policies are complementary to the permission scopes that are declared by the application.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX
```
New-ApplicationAccessPolicy -AccessRight <ApplicationAccessPolicyRight> -AppId <String[]> -PolicyScopeGroupId <RecipientIdParameter>
 [-Confirm]
 [-Description <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

You can create a limited number of policies in your organization based on a fixed amount of space. If your organization runs out of space for these policies, you'll see the error: "The total size of App Access Policies exceeded the limit." To maximize the number of policies and reduce the amount of space that's consumed by the policies, set a one space character description for the policy. This method will allow approximately 300 policies (versus a previous limit of 100 policies).

While scope-based resource access like Mail.Read or Calendar.Read is effective to ensure that the application can only read email or events within a mailbox and not do anything else, application access policies allow admins to enforce limits that are based on a list of mailboxes. For example, apps developed for one country/region shouldn't have access to data from other countries/regions. Or, or a CRM integration application should only access calendars in the Sales organization and no other departments.

Every API request using the Outlook REST APIs or Microsoft Graph APIs to a target mailbox done by an application is verified using the following rules (in the same order):

1. If there are multiple application access policies for the same Application and Target Mailbox pair, DenyAccess policy is prioritized over a RestrictAccess policy.
2. If a DenyAccess policy exists for the Application and Target Mailbox, then the app's access request is denied (even if there exists a RestrictAccess policy).
3. If there are any RestrictAccess policies that match the Application and Target Mailbox, then the app is granted access.
4. If there are any Restrict policies for the Application, and the Target Mailbox is not a member of those policies, then application is denied access to the target mailbox.
5. If none of the above conditions are met, then the application is granted access to the requested target mailbox.

## EXAMPLES

### Example 1
```powershell
New-ApplicationAccessPolicy -AccessRight DenyAccess -AppId "3dbc2ae1-7198-45ed-9f9f-d86ba3ec35b5", "6ac794ca-2697-4137-8754-d2a78ae47d93" -PolicyScopeGroupId "Engineering Staff" -Description "Engineering Group Policy"
```

This example creates a new application access policy with the following settings:

- AccessRight: DenyAccess
- AppIDs: 3dbc2ae1-7198-45ed-9f9f-d86ba3ec35b5 and 6ac794ca-2697-4137-8754-d2a78ae47d93
- PolicyScopeGroupId: Engineering Staff
- Description: Engineering Group Policy

### Example 2
```powershell
New-ApplicationAccessPolicy -AccessRight RestrictAccess -AppId "e7e4dbfc-046f-4074-9b3b-2ae8f144f59b" -PolicyScopeGroupId EvenUsers@AppPolicyTest2.com -Description "Restrict this app's access to members of security group EvenUsers."
```

This example creates a new application access policy with the following settings:

- AccessRight: RestrictAccess
- AppIDs: e7e4dbfc-046f-4074-9b3b-2ae8f144f59b
- PolicyScopeGroupId: EvenUsers@AppPolicyTest2.com
- Description: Restrict this app's access to members of security group EvenUsers.

### Example 3
```powershell
New-ApplicationAccessPolicy -AccessRight DenyAccess -AppId "e7e4dbfc-046f-4074-9b3b-2ae8f144f59b" -PolicyScopeGroupId OddUsers@AppPolicyTest2.com -Description "Deny this app access to members of security group OddUsers."
```

This example creates a new application access policy with the following settings:

- AccessRight: DenyAccess
- AppIDs: e7e4dbfc-046f-4074-9b3b-2ae8f144f59b
- PolicyScopeGroupId: OddUsers@AppPolicyTest2.com
- Description: Deny this app access to members of security group OddUsers.

## PARAMETERS

### -AccessRight
The AccessRight parameter specifies the restriction type that you want to assign in the application access policy. Valid values are:

- RestrictAccess: Allows the associated app to only access data that's associated with mailboxes specified by the PolicyScopeGroupID parameter.
- DenyAccess: Allows the associated app to only access data that's not associated with mailboxes specified by the PolicyScopeGroupID parameter.

```yaml
Type: ApplicationAccessPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PolicyScopeGroupID
The PolicyScopeGroupID parameter specifies the recipient to define in the policy. Valid recipient types are security principals in Exchange Online (users or groups, including nested groups, that can have permissions assigned to them). For example:

- Mailboxes with associated user accounts (UserMailbox)
- Mail users, also known as mail-enabled users (MailUser)
- Mail-enabled security groups (MailUniversalSecurityGroup)

You can use any value that uniquely identifies the recipient. For example:

- Name
- Distinguished name (DN)
- Display name
- Email address
- GUID

To verify that a recipient is a security principal, run either of the following commands: `Get-Recipient -Identity <RecipientIdentity> | Select-Object IsValidSecurityPrincipal` or `Get-Recipient -ResultSize unlimited | Format-Table -Auto Name,RecipientType,RecipientTypeDetails,IsValidSecurityPrincipal`.

You can't use recipients that aren't security principals with this parameter. For example, the following types of recipients won't work:

- Discovery mailboxes (DiscoveryMailbox)
- Dynamic distribution groups (DynamicDistributionGroup)
- Distribution groups (MailUniversalDistributionGroup)
- Mail contacts (MailContact)
- Mail-enabled public folders (PublicFolder)
- Microsoft 365 Groups (GroupMailbox)
- Resource mailboxes (RoomMailbox or EquipmentMailbox)
- Shared mailboxes (SharedMailbox)

If you need to scope the policy to shared mailboxes, you can add the shared mailboxes as members of a mail-enabled security group.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
