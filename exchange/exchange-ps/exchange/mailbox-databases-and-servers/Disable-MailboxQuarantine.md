---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Disable-MailboxQuarantine
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Disable-MailboxQuarantine

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Disable-MailboxQuarantine cmdlet to release quarantined mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Disable-MailboxQuarantine [-Identity] <GeneralMailboxIdParameter> [-Confirm] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Disable-MailboxQuarantine -Database <DatabaseIdParameter> -StoreMailboxIdentity <StoreMailboxIdParameter>
 [-Confirm] [-IncludePassive] [-WhatIf] [<CommonParameters>]
```

### Set3
```
Disable-MailboxQuarantine -Database <DatabaseIdParameter> [-IncludeAllMailboxes] [-Confirm] [-IncludePassive]
 [-WhatIf] [<CommonParameters>]
```

### Set1
```
Disable-MailboxQuarantine [-Identity] <GeneralMailboxOrMailUserIdParameter> [-Confirm] [-IncludePassive]
 [-WhatIf] [<CommonParameters>]
```

### Set4
```
Disable-MailboxQuarantine [-IncludeAllDatabases] -Server <ServerIdParameter> [-Confirm] [-IncludePassive]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Mailboxes are quarantined when they affect the availability of the mailbox database. Typically a software fix from Microsoft is required before releasing a mailbox from quarantine. If a fix isn't deployed before releasing the mailbox, the quarantine on the mailbox will be re-enabled if the condition recurs. The default quarantine duration is 24 hours.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Disable-MailboxQuarantine "Brian Johnson"
```

This example releases the mailbox for the user Brian Johnson from quarantine.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to release from quarantine. You can use any value that uniquely identifies the mailbox.

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

You can't use this parameter with the Database or Server parameters.

```yaml
Type: GeneralMailboxIdParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
The Database parameter specifies the database that contains the mailboxes you want to release from quarantine. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

You identify the mailboxes by using the IncludeAllMailboxes switch or the StoreMailboxIdentity parameter.

You can't use this parameter with the Identity or Server parameters.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAllDatabases
The IncludeAllDatabases switch specifies that you want to release all quarantined mailboxes in all databases on the server you specify with the Server parameter. You don't need to specify a value with this switch.

You can only use this switch with the Identity or Database parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAllMailboxes
The IncludeAllMailboxes switch specifies that you want to release all mailboxes from quarantine in the database you specify with the Database parameter. You don't need to specify a value with this switch.

You can't use this switch with the StoreMailboxIdentity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the server that contains the mailboxes that you want to release from quarantine by using the IncludeAllDatabases switch. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished Name (DN)

- Exchange Legacy DN

You can't use this parameter with the Identity or Database parameters.

```yaml
Type: ServerIdParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoreMailboxIdentity
The StoreMailboxIdentity parameter specifies the mailbox that you want to release from quarantine when you use the Database parameter.

You identify the mailbox by its GUID value. You can find the GUID value by using the Get-Mailbox or Get-MailboxStatistics cmdlets.

You can't use this switch with the IncludeAllMailboxes switch.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePassive
The IncludePassive switch specifies that you also want to release inactive copies of the mailbox from quarantine. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set3, Set1, Set4
Aliases:
Applicable: Exchange Server 2016
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/5e990971-e24a-4977-9408-fbab1289ea7e.aspx)
