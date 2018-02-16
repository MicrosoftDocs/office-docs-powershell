---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Remove-MailboxPermission

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-MailboxPermission cmdlet to remove permissions from a user's mailbox.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-MailboxPermission cmdlet to remove permissions from a user's mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> -AccessRights <MailboxRights[]>
 -User <SecurityPrincipalIdParameter> [-Confirm] [-Deny] [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Remove-MailboxPermission [[-Identity] <MailboxIdParameter>] [-AccessRights <MailboxRights[]>]
 -Instance <MailboxAcePresentationObject> [-User <SecurityPrincipalIdParameter>] [-Confirm] [-Deny]
 [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] [-WhatIf] [-ResetDefault]
 [<CommonParameters>]
```

### Set3
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [-AccessRights <MailboxRights[]>] -Instance <MailboxAcePresentationObject>
 [-User <SecurityPrincipalIdParameter>] [-Deny]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] [-ClearAutoMapping]
 [<CommonParameters>]
```

### Set4
```
Remove-MailboxPermission [[-Identity] <MailboxIdParameter>] [-AccessRights <MailboxRights[]>]
 -Instance <MailboxAcePresentationObject> [-User <SecurityPrincipalIdParameter>] [-Confirm] [-Deny]
 [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] [-WhatIf] [<CommonParameters>]
```

### Set5
```
Remove-MailboxPermission [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Remove-MailboxPermission cmdlet allows you to remove permissions from a user's mailbox, for example, removing full access to another user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Permissions and delegation" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Remove-MailboxPermission cmdlet allows you to remove permissions from a user's mailbox, for example, removing full access to another user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Permissions and delegation" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

The Remove-MailboxPermission cmdlet allows you to remove permissions from a user's mailbox, for example, removing full access to another user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Remove-MailboxPermission -Identity Test1 -User Test2 -AccessRights FullAccess -InheritanceType All
```

This example removes user Test2's full access rights to Test1's mailbox.

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-MailboxPermission -Identity Test1 -User Test2 -AccessRights FullAccess -InheritanceType All
```

This example removes user Test2's full access rights to Test1's mailbox.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-MailboxPermission -Identity Test1 -User Test2 -AccessRights FullAccess -InheritanceType All
```

This example removes user Test2's full access rights to Test1's mailbox.

### Example 1 -------------------------- (Exchange Online)
```
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
Parameter Sets: Set2, Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010

The Identity parameter identifies the mailbox. You can use the following values:

- GUID

- ADObjectID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the mailbox where you are removing permissions. You can use any value that uniquely identifies the mailbox:

For example:

- Alias

- Distinguished name (DN)

- GUID

- Name

- Display name

- LegacyExchangeDN

- Email address



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox where you are removing permissions. You can use any value that uniquely identifies the mailbox:

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
Parameter Sets: Set1, Set3, Set5
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
Parameter Sets: Set2, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Instance
!!! Exchange Server 2010

The Instance parameter enables you to pass an entire object to the command to be processed. It's mainly used in scripts where an entire object must be passed to the command.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Instance parameter enables you to pass an entire object to the command to be processed. It's mainly used in scripts where an entire object must be passed to the command.



```yaml
Type: MailboxAcePresentationObject
Parameter Sets: Set2, Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -User
!!! Exchange Server 2010

The User parameter specifies the user mailbox that will get permissions added.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The User parameter specifies the user mailbox that will get permissions removed.



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
Parameter Sets: Set2, Set3, Set4
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set1, Set2, Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
The InheritanceType parameter specifies whether permissions are inherited to folders within the mailbox.

```yaml
Type: None | All | Descendents | SelfAndChildren | Children
Parameter Sets: Set1, Set2, Set3, Set4
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
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

[Online Version](https://technet.microsoft.com/library/eda30705-6070-413a-88c5-db262fbad8d3.aspx)

