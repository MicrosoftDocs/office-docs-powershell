---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Disable-Mailbox
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Disable-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Disable-Mailbox cmdlet to disable the mailbox of existing users who already have mailboxes. For this cmdlet, a user could also be a public folder mailbox or an InetOrgPerson object. The user account that's associated with the mailbox remains, but it's no longer associated with a mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set4
```
Disable-Mailbox [-Identity] <MailboxIdParameter> [-Arbitration] [-Confirm]
 [-DisableLastArbitrationMailboxAllowed] [-DomainController <Fqdn>] [-IgnoreDefaultScope] [-IgnoreLegalHold]
 [-WhatIf] [-DisableArbitrationMailboxWithOABsAllowed] [-PermanentlyDisable] [<CommonParameters>]
```

### Set2
```
Disable-Mailbox [-Identity] <MailboxIdParameter> [-Archive] [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-IgnoreLegalHold] [-WhatIf] [-PermanentlyDisable] [<CommonParameters>]
```

### Set3
```
Disable-Mailbox [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-IgnoreLegalHold] [-RemoteArchive] [-WhatIf] [-PermanentlyDisable] [<CommonParameters>]
```

### Set5
```
Disable-Mailbox [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-IgnoreLegalHold] [-PublicFolder] [-WhatIf] [-PermanentlyDisable] [<CommonParameters>]
```

## DESCRIPTION
The Disable-Mailbox cmdlet removes the mailbox's Exchange attributes from Active Directory. The mailbox isn't deleted and can be reconnected to its user at a later date by using the Connect-Mailbox cmdlet.

The Disable-Mailbox cmdlet also performs the clean-up task on the individual mailbox, so the mailbox is disconnected immediately after this task completes.

Under normal circumstances, a mailbox is marked as disconnected immediately after the Disable-Mailbox or Remove-Mailbox command completes. However, if the mailbox was disabled or removed while the Exchange Information Store service was stopped, or if it was disabled or removed by an external means other than Exchange management interfaces, the status of the mailbox object in the Exchange mailbox database won't be marked as disconnected.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Disable-Mailbox -Identity "John Woods"
```

This example disables the mailbox of the user named John Woods and removes all mailbox attributes from John's user account..

### -------------------------- Example 2 --------------------------
```
Disable-Mailbox -Identity "John Woods" -RemoteArchive
```

This example disables the remote archive for the on-premises user named John Woods.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to mailbox-disable. You can use any value that uniquely identifies the mailbox. For example:

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Arbitration
This parameter is available only in on-premises Exchange.

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive switch specifies whether to disconnect the archive mailbox from the associated user. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
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

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DisableLastArbitrationMailboxAllowed
This parameter is available only in on-premises Exchange.

The DisableLastArbitrationMailboxAllowed switch specifies whether to disable the specified mailbox, even if it's the last arbitration mailbox in the organization. If you disable the last arbitration mailbox in the organization, you can't have user-created distribution groups or moderated recipients. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreLegalHold
The IgnoreLegalHold switch specifies whether to ignore the legal hold status of the user. When you disable or remove the user, the user's cloud-based mailbox that's on legal hold is also disabled or removed. You don't need to specify a value with this switch.

After you disable or remove a mailbox, you can't include it in a discovery search. When you disable a mailbox, the mailbox is disconnected from the user account. Disconnected mailboxes and removed mailboxes are permanently deleted from the mailbox database after the deleted mailbox retention period expires. However, you can also remove a mailbox and purge it immediately from the mailbox database. Check with your organization's legal or Human Resources department before you disable or remove a mailbox that's on legal hold.

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

### -RemoteArchive
This parameter is available only in on-premises Exchange.

The RemoteArchiveswitch specifies whether to disconnect the remote archive for this mailbox. A remote archive exists in the cloud-based service. When you use this switch, the RemoteRecipientType property for the mailbox is reset to specify that this mailbox doesn't have a remote archive. You don't need to specify a value with this switch.

You can't use this switch with the Archive switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

### -DisableArbitrationMailboxWithOABsAllowed
This parameter is available only in on-premises Exchange.

The DisableArbitrationMailboxWithOABsAllowed switch specifies whether to bypass the checks for offline address books (OABs) within the specified arbitration mailbox that is being mail-disabled. When you use this switch, the arbitration mailbox is disabled even if OABs are present in the mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
This parameter is available only in on-premises Exchange.

The PublicFolderswitch specifies that the mailbox to mailbox-disable is a public folder mailbox. You need to use this switch to mailbox-disable a public folder mailbox. You don't need to specify a value with this switch.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermanentlyDisable
This parameter is available only in the cloud-based service.

The PermanentlyDisable switch specifies whether to permanently disable the mailbox. You don't need to specify a value with this switch.

You can only use this switch on user mailboxes that aren't licensed and aren't on hold.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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

[Online Version](https://technet.microsoft.com/library/33be55a3-1880-437d-a631-c1cca1736421.aspx)
