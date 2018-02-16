---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Enable-TransportRule

## SYNOPSIS
!!! Exchange Server 2010

Use the Enable-TransportRule cmdlet to instruct the Transport Rules agent to enable the processing of a specific transport rule for all e-mail messages that pass through a Hub Transport server or an Edge Transport server.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Enable-TransportRule cmdlet to enable a specific transport rule for messages that pass through the Transport service on a Mailbox server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Enable-TransportRule cmdlet to enable transport rules (mail flow rules) in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Enable-TransportRule [-Identity] <RuleIdParameter> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [-Mode <Audit | AuditAndNotify | Enforce>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

For information about how to disable the processing of transport rules in a Microsoft Exchange Server 2010 organization, see Disable-TransportRule. For information about the Transport Rules agent, see Overview of Transport Rules.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport rules" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

You can turn specific transport rules on or off in your organization at any time using the Enable-TransportRule and Disable-TransportRule cmdlets. To learn more about transport rules, see Mail flow rules (transport rules) in Exchange 2013.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport rules" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

To disable rules that are enabled, use the Disable-TransportRule cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Enable-TransportRule "Disclaimer-Finance"
```

This example enables the transport rule Disclaimer-Finance.

### Example 1 -------------------------- (Exchange Server 2013)
```
Enable-TransportRule "Disclaimer-Finance"
```

This example enables the transport rule Disclaimer-Finance.

### Example 1 -------------------------- (Exchange Server 2016)
```
Enable-TransportRule -Identity "Disclaimer-Finance"
```

This example enables the transport rule named Disclaimer Finance.

### Example 1 -------------------------- (Exchange Online)
```
Enable-TransportRule -Identity "Disclaimer-Finance"
```

This example enables the transport rule named Disclaimer Finance.

### Example 1 -------------------------- (Exchange Online Protection)
```
Enable-TransportRule -Identity "Disclaimer-Finance"
```

This example enables the transport rule named Disclaimer Finance.

### Example 2 -------------------------- (Exchange Server 2013)
```
Enable-TransportRule "Require approval of messages to contoso.com" -Mode Audit
```

This example enables the transport rule Require approval of messages to contoso.com in audit mode, so you can see how the rule would function by analyzing the related entries in message tracking logs.

### Example 2 -------------------------- (Exchange Server 2016)
```
Enable-TransportRule -Identity "Require approval of messages to contoso.com" -Mode Audit
```

This example enables the transport rule named "Require approval of messages to contoso.com" in audit mode, so you can see how the rule would function by analyzing the related entries in the message tracking log.

### Example 2 -------------------------- (Exchange Online)
```
Enable-TransportRule -Identity "Require approval of messages to contoso.com" -Mode Audit
```

This example enables the transport rule named "Require approval of messages to contoso.com" in audit mode, so you can see how the rule would function by analyzing the related entries in the message tracking log.

### Example 2 -------------------------- (Exchange Online Protection)
```
Enable-TransportRule -Identity "Require approval of messages to contoso.com" -Mode Audit
```

This example enables the transport rule named "Require approval of messages to contoso.com" in audit mode, so you can see how the rule would function by analyzing the related entries in the message tracking log.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the rule to be enabled. Enter either the GUID or the name of the rule. You can omit the parameter label.



!!! Exchange Server 2013

The Identity parameter specifies the rule you want to turn on. Enter either the name or the GUID of the rule. You can omit this parameter label.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Identity parameter specifies the rule that you want to enable. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
!!! Exchange Server 2013

The Mode parameter specifies in which mode this rule will operate after it's turned on. Valid values for this parameter include:

- Audit The rule is turned on, and what would have happened if the rule was enforced is logged in message tracking logs. Exchange doesn't take any action that impacts the delivery of the message.

- AuditAndNotify The rule is turned on, and it operates the same way it would in Audit mode, but notifications are also enabled.

- Enforce The rule is turned on, and all actions specified in the rule are taken.

The default value is Enforce.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Mode parameter specifies how the rule operates after it's enabled. Valid values are:

- Audit: The actions that the rule would have taken are written to the message tracking log, but no any action is taken on the message that would impact delivery.

- AuditAndNotify: The rule operates the same as in Audit mode, but notifications are also enabled.

- Enforce: All actions specified in the rule are taken. This is the default value.



```yaml
Type: Audit | AuditAndNotify | Enforce
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/203d2fa8-83fe-4643-bbc2-db746ffd76a7.aspx)

