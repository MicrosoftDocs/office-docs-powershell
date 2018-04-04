---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Add-MailboxPermission
schema: 2.0.0
---

# Add-MailboxPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Add-MailboxPermission cmdlet to add permissions to a mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Add-MailboxPermission [-Identity] <MailboxIdParameter> -AccessRights <MailboxRights[]>
 -User <SecurityPrincipalIdParameter> [-AutoMapping <$true | $false>] [-Confirm] [-Deny]
 [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Add-MailboxPermission [-Identity] <MailboxIdParameter> -Owner <SecurityPrincipalIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-IgnoreDefaultScope] [-WhatIf] [<CommonParameters>]
```

### Set3
```
Add-MailboxPermission [[-Identity] <MailboxIdParameter>] [-AccessRights <MailboxRights[]>]
 -Instance <MailboxAcePresentationObject> [-User <SecurityPrincipalIdParameter>]
 [-AutoMapping <$true | $false>] [-Confirm] [-Deny] [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] [-WhatIf] [<CommonParameters>]
```

### Set4
```
Add-MailboxPermission [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [<CommonParameters>]
```

### Set5
```
Add-MailboxPermission [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the mailbox object that's specified by the Identity parameter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Add-MailboxPermission -Identity "Terry Adams" -User "Kevin Kelly" -AccessRights FullAccess -InheritanceType All
```

This example assigns the user Kevin Kelly Full Access permission to Terry Adams's mailbox.

### Example 2
```
Add-MailboxPermission -Identity "Room 222" -Owner "Tony Smith"
```

This example sets the user Tony Smith as the owner of the resource mailbox named Room 222.

### Example 3
```
Add-MailboxPermission -Identity "Jeroen Cool" -User "Mark Steele" -AccessRights FullAccess -InheritanceType All -AutoMapping $false
```

This example assigns the user Mark Steele Full Access permission to Jeroen Cool's mailbox, prevents Outlook from opening Jeroen Cool's mailbox when Mark Steele opens Outlook.

### Example 4
```
Get-Mailbox -ResultSize unlimited -Filter {(RecipientTypeDetails -eq 'UserMailbox') -and (Alias -ne 'Admin')} | Add-MailboxPermission -User admin@contoso.com -AccessRights FullAccess -InheritanceType All
```

In Office 365, this example assigns the administrator account admin@contoso.com Full Access permission to all user mailboxes in the contoso.com Office 365 organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox where you want to assign permissions to the user. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

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
Parameter Sets: Set1, Set2, Set4, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: MailboxIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessRights
The AccessRights parameter specifies the permission that you want to assign to the user on the mailbox. Valid values are:

- ChangeOwner

- ChangePermission

- DeleteItem

- ExternalAccount

- FullAccess

- ReadPermission

You can specify multiple values separated by commas.

```yaml
Type: MailboxRights[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MailboxRights[]
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
The Instance parameter is no longer used and will be deprecated.

```yaml
Type: MailboxAcePresentationObject
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Owner
The Owner parameter specifies the owner of the mailbox object. The default mailbox owner is NT AUTHORITY\\SELF.

The owner that you specify for this parameter must be a user or security group (a security principal that can have permissions assigned). You can use any value that uniquely identifies the owner. For example:

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the user that you're assigning the permission to.

The user that you specify for this parameter must be a user or security group (a security principal that can have permissions assigned). You can use any value that uniquely identifies the user. For example:

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoMapping
The AutoMapping parameter specifies whether to enable or disable the auto-mapping feature in Microsoft Outlook that uses Autodiscover to automatically open other mailboxes for the user. Valid values are:

- $true: Outlook automatically opens the mailbox where the user is assigned Full Access permission. This is the default value.

- $false: Outlook doesn't automatically open the mailbox where the user is assigned Full Access permission.

If you've already assign the user Full Access to the mailbox, and you want to prevent the mailbox from automatically opening in the user's Outlook, you need to remove the user's Full Access permission by using the Remove-MailboxPermission cmdlet, and then assign the permission to the user on the mailbox again, but this time include -AutoMapping $false in the command.

```yaml
Type: $true | $false
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Deny
The Deny switch specifies whether to deny the specified permissions to the user on the mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InheritanceType
The InheritanceType parameter specifies how permissions are inherited by folders in the mailbox. Valid values are:

- All

- Children

- Descendents[sic]

- SelfAndChildren

```yaml
Type: None | All | Descendents | SelfAndChildren | Children
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/a9aacbf5-5e6c-47ef-95d6-e24547e95d01.aspx)
