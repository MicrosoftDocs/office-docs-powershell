---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-mailboxpermission
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MailboxPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MailboxPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxPermission cmdlet to retrieve permissions on a mailbox.

> [!NOTE]
> In Exchange Online PowerShell, we recommend that you use the Get-EXOMailboxPermission cmdlet instead of this cmdlet. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Owner
```
Get-MailboxPermission [-Identity] <MailboxIdParameter> [-Owner]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

### AccessRights
```
Get-MailboxPermission [-Identity] <MailboxIdParameter> [-User <SecurityPrincipalIdParameter>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
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

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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
The Identity parameter specifies the mailbox you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://docs.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
The Owner switch returns the owner information for the mailbox that's specified by the Identity parameter. You don't need to specify a value with this switch.

You can't use this switch with the User parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Owner
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain.

If you set the recipient scope to include all recipients in the forest, and if you don't use this parameter, it's possible that the user information is read from a global catalog with outdated information.

If you use this parameter, multiple reads might be necessary to get the information.

By default, the recipient scope is set to the domain that hosts your servers that run Exchange.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

You can't use this parameter with the Owner parameter.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: AccessRights
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
