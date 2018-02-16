---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Enable-UMCallAnsweringRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Enable-UMCallAnsweringRule cmdlet to enable a call answering rule that has been created within a UM-enabled mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Enable-UMCallAnsweringRule [-Identity] <UMCallAnsweringRuleIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2013

The Enable-UMCallAnsweringRule cmdlet enables the call answering rule by modifying its status variable. When the call answering rule is created, it's enabled. This cmdlet allows you to enable a previously disabled call answering rule. Enabling a call answering rule enables the cmdlet to retrieve the call answering rule including the conditions and actions for a specified call answering rule.

After this task is completed, the cmdlet sets the parameters and values specified. When you enable a call answering rule, the call answering rule is processed when an incoming call is received.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM call answering rules" entry in the Unified Messaging permissions topic.

!!! Exchange Server 2016, Exchange Online

The Enable-UMCallAnsweringRule cmdlet enables the call answering rule by modifying its status variable. When the call answering rule is created, it's enabled. This cmdlet allows you to enable a previously disabled call answering rule. Enabling a call answering rule enables the cmdlet to retrieve the call answering rule including the conditions and actions for a specified call answering rule.

After this task is completed, the cmdlet sets the parameters and values specified. When you enable a call answering rule, the call answering rule is processed when an incoming call is received.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2013)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith
```

This example enables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith.

### Example 1 -------------------------- (Exchange Server 2016)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith
```

This example enables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith.

### Example 1 -------------------------- (Exchange Online)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith
```

This example enables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith.

### Example 2 -------------------------- (Exchange Server 2013)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -WhatIf
```

The example uses the WhatIf switch to test whether the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith is ready to be enabled and if there are any errors within the command.

### Example 2 -------------------------- (Exchange Server 2016)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -WhatIf
```

The example uses the WhatIf switch to test whether the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith is ready to be enabled and if there are any errors within the command.

### Example 2 -------------------------- (Exchange Online)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -WhatIf
```

The example uses the WhatIf switch to test whether the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith is ready to be enabled and if there are any errors within the command.

### Example 3 -------------------------- (Exchange Server 2013)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -Confirm
```

This example enables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith and prompts the logged-on user to confirm that the call answering rule is to be enabled.

### Example 3 -------------------------- (Exchange Server 2016)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -Confirm
```

This example enables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith and prompts the logged-on user to confirm that the call answering rule is to be enabled.

### Example 3 -------------------------- (Exchange Online)
```
Enable-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith -Confirm
```

This example enables the call answering rule MyUMCallAnsweringRule in the mailbox for Tony Smith and prompts the logged-on user to confirm that the call answering rule is to be enabled.

## PARAMETERS

### -Identity
The Identity parameter specifies the UM call answering rule in a UM-enabled mailbox that's to be enabled.

```yaml
Type: UMCallAnsweringRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the UM-enabled mailbox that contains the UM call answering rule. The default is the user's mailbox running the cmdlet.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/23b31348-7055-4328-887e-46e7792b0e25.aspx)

