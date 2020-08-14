---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-exomailboxpermission
applicable: Exchange Online
title: Get-EXOMailboxPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
monikerRange: "exchonline-ps"
---

# Get-EXOMailboxPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Conect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

Use the Get-EXOMailboxPermission cmdlet to retrieve permissions on a mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-EXOMailboxPermission [-ResultSize <Unlimited>] [<CommonParameters>]
```

### Identity
```
Get-EXOMailboxPermission
 [-ExternalDirectoryObjectId <Guid>]
 [-Identity <String>]
 [-Owner]
 [-ResultSize <Unlimited>]
 [-SoftDeletedMailbox]
 [-User <String>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The output of this cmdlet shows the following information:

Identity: The mailbox in question.

User: The security principal (user, security group, Exchange management role group, etc.) that has permission to the mailbox.

AccessRights: The permission that the security principal has on the mailbox. The available values are ChangeOwner (change the owner of the mailbox), ChangePermission (change the permissions on the mailbox), DeleteItem (delete the mailbox), ExternalAccount (indicates the account isn't in the same domain), FullAccess (open the mailbox, access its contents, but can't send mail) and ReadPermission (read the permissions on the mailbox). Whether the permissions are allowed or denied is indicated in the Deny column.

IsInherited: Whether the permission is inherited (True) or directly assigned to the mailbox (False). Permissions are inherited from the mailbox database and/or Active Directory. Typically, directly assigned permissions override inherited permissions.

Deny: Whether the permission is allowed (False) or denied (True). Typically, deny permissions override allow permissions.

By default, the following permissions are assigned to user mailboxes:

FullAccess and ReadPermission are directly assigned to NT AUTHORITY\SELF. This entry gives a user permission to their own mailbox.

FullAccess is denied to Administrator, Domain Admins, Enterprise Admins and Organization Management. These inherited permissions prevent these users and group members from opening other users' mailboxes.

ChangeOwner, ChangePermission, DeleteItem, and ReadPermission are allowed for Administrator, Domain Admins, Enterprise Admins and Organization Management. Note that these inherited permission entries also appear to allow FullAccess. However, these users and groups do not have FullAccess to the mailbox because the inherited Deny permission entries override the inherited Allow permission entries.

FullAccess is inherited by NT AUTHORITY\SYSTEM and ReadPermission is inherited by NT AUTHORITY\NETWORK.

FullAccess and ReadPermission are inherited by Exchange Servers, ChangeOwner, ChangePermission, DeleteItem, and ReadPermission are inherited by Exchange Trusted Subsystem and ReadPermission is inherited by Managed Availability Servers.

By default, other security groups and role groups inherit permissions to mailboxes based on their location (on-premises Exchange or Microsoft 365).

## EXAMPLES

### Example 1
```powershell
Get-EXOMailboxPermission -Identity john@contoso.com
```

This example return the permission the user has on mailboxes

## PARAMETERS

### -ExternalDirectoryObjectId
The ExternalDirectoryObjectId parameter identifies the mailbox you want to view by using the ObjectId of the mailbox in Azure Active Directory. You can use this value instead of the Identity parameter.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox you want to view. For the best performance, we recommend using the user ID or user principal name (UPN) to identify the mailbox.

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- LegacyExchangeDN

- SamAccountName

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Owner
The Owner switch returns the owner information for the mailbox that's specified by the Identity parameter. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedMailbox
The SoftDeletedMailbox switch is required to return soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter returns information about the user who has permissions to the mailbox specified by the Identity parameter.

The user that you specify for this parameter must be a user or security group (a security principal that can have permissions assigned). You can use any value that uniquely identifies the user. For example: For example:

- Name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the UPN for the mailbox you want to view (for example, navin.contoso.com).

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
