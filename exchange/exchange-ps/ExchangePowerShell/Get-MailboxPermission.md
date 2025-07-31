---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxpermission
schema: 2.0.0
title: Get-MailboxPermission
---

# Get-MailboxPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxPermission cmdlet to retrieve permissions on a mailbox.

**Note**: In Exchange Online PowerShell, we recommend that you use the Get-EXOMailboxPermission cmdlet instead of this cmdlet. For more information, see [Connect to Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Owner
```
Get-MailboxPermission [-Identity] <MailboxIdParameter> [-Owner]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IncludeUserWithDisplayName]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-UseCustomRouting]
 [<CommonParameters>]
```

### AccessRights
```
Get-MailboxPermission [-Identity] <MailboxIdParameter> [-User <SecurityPrincipalIdParameter>] [-SoftDeletedMailbox]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IncludeSoftDeletedUserPermissions]
 [-IncludeUnresolvedPermissions]
 [-IncludeUserWithDisplayName]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-UseCustomRouting]
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

- FullAccess and ReadPermission are directly assigned to NT AUTHORITY\\SELF. This entry gives a user permission to their own mailbox.
- FullAccess is denied to Administrator, Domain Admins, Enterprise Admins and Organization Management. These inherited permissions prevent these users and group members from opening other users' mailboxes.
- ChangeOwner, ChangePermission, DeleteItem, and ReadPermission are allowed for Administrator, Domain Admins, Enterprise Admins and Organization Management. Note that these inherited permission entries also appear to allow FullAccess. However, these users and groups do not have FullAccess to the mailbox because the inherited Deny permission entries override the inherited Allow permission entries.
- FullAccess is inherited by NT AUTHORITY\\SYSTEM and ReadPermission is inherited by NT AUTHORITY\\NETWORK.
- FullAccess and ReadPermission are inherited by Exchange Servers, ChangeOwner, ChangePermission, DeleteItem, and ReadPermission are inherited by Exchange Trusted Subsystem and ReadPermission is inherited by Managed Availability Servers.

By default, other security groups and role groups inherit permissions to mailboxes based on their location (on-premises Exchange or Microsoft 365).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxPermission -Identity john@contoso.com | Format-List
```

This example returns permissions on the mailbox by its SMTP address john@contoso.com.

### Example 2
```powershell
Get-MailboxPermission -Identity john@contoso.com -User "Ayla"
```

This example returns permissions that the user Ayla has on John's mailbox.

### Example 3
```powershell
Get-MailboxPermission -Identity Room222 -Owner
```

This example returns the owner information for the resource mailbox Room222.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the mailbox you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Credential

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The GroupMailbox switch is required to return Microsoft 365 Groups in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSoftDeletedUserPermissions

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The IncludeSoftDeletedUserPermissions switch returns permissions from soft-deleted mailbox users in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are mailboxes that have been deleted, but are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeUnresolvedPermissions

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The IncludeUnresolvedPermissions switch returns unresolved permissions in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeUserWithDisplayName

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill IncludeUserWithDisplayName Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Owner switch returns the owner information for the mailbox that's specified by the Identity parameter. You don't need to specify a value with this switch.

You can't use this switch with the User parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Owner
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. You don't need to specify a value with this switch.

The command: `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest requires the ReadFromDomainController switch. Otherwise, the command might use a global catalog that contains outdated information. Also, you might need to run multiple iterations of the command with the ReadFromDomainController switch to get the information.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

This parameter is available only in the cloud-based service.

The SoftDeletedMailbox switch is required to return soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCustomRouting

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill UseCustomRouting Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The User parameter filters the results by who has permissions to the mailbox that's specified by the Identity parameter. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users
- Security groups

For the best results, we recommend using the following values:

- UPN: For example, `user@contoso.com` (users only).
- Domain\\SamAccountName: For example, `contoso\user`.

Otherwise, you can use any value that uniquely identifies the user or group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

You can't use this parameter with the Owner switch.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: AccessRights
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
