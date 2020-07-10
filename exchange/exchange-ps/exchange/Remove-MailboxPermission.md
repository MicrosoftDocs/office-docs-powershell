---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/remove-mailboxpermission
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Remove-MailboxPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Remove-MailboxPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-MailboxPermission cmdlet to remove permissions from a user's mailbox or from an Exchange Server 2016, Exchange Server 2019 or Exchange Online mail user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AccessRights
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> -AccessRights <MailboxRights[]> -User <SecurityPrincipalIdParameter>
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-WhatIf] [<CommonParameters>]
```

### Instance
```
Remove-MailboxPermission -Instance <MailboxAcePresentationObject>
 [-AccessRights <MailboxRights[]>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [[-Identity] <MailboxIdParameter>]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-ResetDefault]
 [-User <SecurityPrincipalIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

### Owner
```
Remove-MailboxPermission [[-Identity] <MailboxIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-WhatIf] [<CommonParameters>]
```

### ClearAutoMapping
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> [-ClearAutoMapping]
 [-AccessRights <MailboxRights[]>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-User <SecurityPrincipalIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

### ResetDefault
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> [-ResetDefault]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Remove-MailboxPermission cmdlet allows you to remove permissions from a user's mailbox, for example, removing full access to another user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-MailboxPermission -Identity Test1 -User Test2 -AccessRights FullAccess -InheritanceType All
```

This example removes user Test2's full access rights to Test1's mailbox.

## PARAMETERS

### -AccessRights
The AccessRights parameter specifies the rights required to perform the operation. You can use the following values:

- FullAccess

- SendAs

- ExternalAccount

- DeleteItem

- ReadPermission

- ChangePermission

- ChangeOwner

```yaml
Type: MailboxRights[]
Parameter Sets: AccessRights
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MailboxRights[]
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox where you are removing permissions. You can use any value that uniquely identifies the mailbox: For example:

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
Parameter Sets: AccessRights, Owner, ClearAutoMapping, ResetDefault
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: MailboxIdParameter
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Instance
This parameter is available only in on-premises Exchange.

The Instance parameter enables you to pass an entire object to the command to be processed. It's mainly used in scripts where an entire object must be passed to the command.

```yaml
Type: MailboxAcePresentationObject
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -User
The User parameter specifies the user mailbox that will get permissions removed.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: AccessRights
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClearAutoMapping
This parameter is available only in the cloud-based service.

The ClearAutoMapping switch specifies that the mailbox is automatically mapped (auto-mapped) by Autodiscover only into the mailbox owner's Outlook profile. The mailbox isn't auto-mapped to other users who have FullAccess permission to the mailbox.

To re-add auto-mapping capability on the mailbox for other users, run the command: Add-MailboxPermission -Identity \<Mailbox\> -AccessRights FullAccess -AutoMapping $true.

```yaml
Type: SwitchParameter
Parameter Sets: ClearAutoMapping
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Deny
The Deny parameter denies permissions to the user on the Active Directory object.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights, Instance
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

### -IgnoreDefaultScope
The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

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

### -InheritanceType
The InheritanceType parameter specifies whether permissions are inherited to folders within the mailbox.

```yaml
Type: ActiveDirectorySecurityInheritance
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetDefault
This parameter is available only in the cloud-based service.

The ResetDefault switch resets the default security descriptor of the mailbox. Permissions on the mailbox are reset so only the mailbox owner has FullAccess permission to the mailbox. The following types of permissions are not affected:

- Recipient permissions (for example, SendAs, SendOnBehalf and delegates).

- Mailbox folder permissions assigned using the MailboxFolderPermission cmdlets.

- Mailbox folder permissions assigned using Outlook or other MAPI clients.

Also, because this switch removes FullAccess permission from other users on the mailbox, the mailbox is no longer auto-mapped by Autodiscover into the Outlook profiles of other users.

```yaml
Type: SwitchParameter
Parameter Sets: Instance
Aliases:
Applicable: Exchange Online

Required: True
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
