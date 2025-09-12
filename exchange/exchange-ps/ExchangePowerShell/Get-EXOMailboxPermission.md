---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-exomailboxpermission
schema: 2.0.0
title: Get-EXOMailboxPermission
---

# Get-EXOMailboxPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-EXOMailboxPermission cmdlet to retrieve permissions on a mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-EXOMailboxPermission [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Identity
```
Get-EXOMailboxPermission
 [-ExternalDirectoryObjectId <Guid>]
 [-Identity <String>]
 [-Owner]
 [-PrimarySmtpAddress <String>]
 [-ResultSize <Unlimited>]
 [-SoftDeletedMailbox]
 [-User <String>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The output of this cmdlet shows the following information:

- Identity: The mailbox in question.
- User: The security principal (user, security group, Exchange management role group, etc.) that has permission to the mailbox.
- AccessRights: The permission that the security principal has on the mailbox. The available values are ChangeOwner (change the owner of the mailbox), ChangePermission (change the permissions on the mailbox), DeleteItem (delete the mailbox), ExternalAccount (indicates the account isn't in the same domain), FullAccess (open the mailbox, access its contents, but can't send mail) and ReadPermission (read the permissions on the mailbox). Whether the permissions are allowed or denied is indicated in the Deny column.
- IsInherited: Whether the permission is inherited (True) or directly assigned to the mailbox (False). Permissions are inherited from the mailbox database and/or Active Directory. Typically, directly assigned permissions override inherited permissions.
- Deny: Whether the permission is allowed (False) or denied (True). Typically, deny permissions override allow permissions.

By default, the following permissions are assigned to user mailboxes:

- FullAccess and ReadPermission are directly assigned to NT AUTHORITY\SELF. This entry gives a user permission to their own mailbox.
- FullAccess is denied to Administrator, Domain Admins, Enterprise Admins and Organization Management. These inherited permissions prevent these users and group members from opening other users' mailboxes.
- ChangeOwner, ChangePermission, DeleteItem, and ReadPermission are allowed for Administrator, Domain Admins, Enterprise Admins and Organization Management. These inherited permission entries also appear to allow FullAccess. However, these users and groups do not have FullAccess to the mailbox because the inherited Deny permission entries override the inherited Allow permission entries.
- FullAccess is inherited by NT AUTHORITY\SYSTEM and ReadPermission is inherited by NT AUTHORITY\NETWORK.
- FullAccess and ReadPermission are inherited by Exchange Servers, ChangeOwner, ChangePermission, DeleteItem, and ReadPermission are inherited by Exchange Trusted Subsystem and ReadPermission is inherited by Managed Availability Servers.

By default, other security groups and role groups inherit permissions to mailboxes based on their location (on-premises Exchange or Microsoft 365).

## EXAMPLES

### Example 1
```powershell
Get-EXOMailboxPermission -Identity john@contoso.com
```

This example return the permission the user has on mailboxes

## PARAMETERS

### -ExternalDirectoryObjectId

> Applicable: Exchange Online

The ExternalDirectoryObjectId parameter identifies the mailbox that you want to view by the ObjectId in Microsoft Entra ID.

You can't use this parameter with the Identity, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the mailbox you want to view. For the best performance, we recommend using the user ID or user principal name (UPN) to identify the mailbox.

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- LegacyExchangeDN
- SamAccountName

You can't use this parameter with the ExternalDirectoryObjectId, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Owner

> Applicable: Exchange Online

The Owner switch returns the owner information for the mailbox that's specified by the Identity parameter. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Online

The PrimarySmtpAddress identifies the mailbox that you want to view by primary SMTP email address (for example, navin@contoso.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedMailbox

> Applicable: Exchange Online

The SoftDeletedMailbox switch is required to return soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Online

The User parameter returns information about the user who has permissions to the mailbox specified by the Identity parameter.

The user that you specify for this parameter must be a user or security group (a security principal that can have permissions assigned). You can use any value that uniquely identifies the user. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

**Note**: Currently, the value that you provide for this parameter is case sensitive.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Exchange Online

The UserPrincipalName parameter identifies the mailbox that you want to view by UPN (for example, navin@contoso.onmicrosoft.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or PrimarySmtpAddress parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
