---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# disable-journalrule

## SYNOPSIS
!!! Exchange Server 2010

Use the Disable-JournalRule cmdlet to disable an existing journal rule on a Hub Transport server.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Disable-JournalRule cmdlet to disable a journal rule on a Mailbox server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
disable-journalrule [-Identity] <RuleIdParameter> [-Confirm] [-DomainController <Fqdn>] [-LawfulInterception]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Disable-JournalRule cmdlet disables an existing rule used by the Journaling agent.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Journaling" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

You can enable or disable specific journal rules in your organization at any time using the Disable-JournalRule and Enable-JournalRule cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Journaling" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

You can enable or disable specific journal rules in your organization at any time using the Disable-JournalRule and Enable-JournalRule cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Disable-JournalRule "Brokerage Communications"
```

This example disables the existing journal rule Brokerage Communications.

### Example 1 -------------------------- (Exchange Server 2013)
```
Disable-JournalRule "Brokerage Communications"
```

This example disables the journal rule Brokerage Communications.

### Example 1 -------------------------- (Exchange Server 2016)
```
Disable-JournalRule "Brokerage Communications"
```

This example disables the journal rule Brokerage Communications.

### Example 1 -------------------------- (Exchange Online)
```
Disable-JournalRule "Brokerage Communications"
```

This example disables the journal rule Brokerage Communications.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-JournalRule | Disable-JournalRule
```

This example disables all journal rules. The Get-JournalRule cmdlet is used to add all journal rules to the pipeline. The results are piped to the Disable-JournalRule cmdlet.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-JournalRule | Disable-JournalRule
```

This example disables all journal rules. The Get-JournalRule cmdlet is used to add all journal rules to the pipeline. The results are piped to the Disable-JournalRule cmdlet.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-JournalRule | Disable-JournalRule
```

This example disables all journal rules. The Get-JournalRule cmdlet is used to add all journal rules to the pipeline. The results are piped to the Disable-JournalRule cmdlet.

### Example 2 -------------------------- (Exchange Online)
```
Get-JournalRule | Disable-JournalRule
```

This example disables all journal rules. The Get-JournalRule cmdlet is used to add all journal rules to the pipeline. The results are piped to the Disable-JournalRule cmdlet.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the rule to be disabled. Enter either the GUID or the name of the journal rule. You can omit the parameter label.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Identity parameter specifies the journal rule you want to disable. Enter either the name or the GUID of the journal rule. You can omit this parameter label.



```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -LawfulInterception
The LawfulInterception parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/0324144b-2818-4e7f-a483-d6d6a19f8276.aspx)

