---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-TransportRulePredicate

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-TransportRulePredicate cmdlet to retrieve a list of all available rule predicates that can be used with the Transport Rules agent on a Hub Transport server or an Edge Transport server.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-TransportRulePredicate cmdlet to retrieve a list of all available rule conditions (predicates) that can be used when creating a transport rule.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-TransportRulePredicate cmdlet to view the predicates (conditions and exceptions) that are available for transport rules (mal flow rules).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-TransportRulePredicate [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-TransportRulePredicate cmdlet displays a list of available rule predicates that you can use in transport rules that are part of the Transport Rules agent in Microsoft Exchange Server 2010.

The predicates available for use on a Hub Transport server and an Edge Transport server are slightly different. For a list of transport rule predicates included with the Get-TransportRulePredicate cmdlet, and to determine which predicates are available on each server role, see Transport Rule Predicates.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport rules" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

The Get-TransportRulePredicate cmdlet displays a list of available rule conditions that you can use in transport rules.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport rules" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

Collectively, the conditions and exceptions in rules are known as predicates, because for every condition, there's a corresponding exception that uses the exact same settings and syntax. The only difference is conditions specify messages to include, while exceptions specify messages to exclude. That's why the output of this cmdlet doesn't list exceptions separately. Also, the names of some of the predicates that are returned by this cmdlet are different than the corresponding parameter names in the New-TransportRule and Set-TransportRule cmdlets.

In on-premises Exchange, the predicates that are available on Mailboxes servers and Edge Transports server are different.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-TransportRulePredicate
```

This example returns all available predicates for transport rules used with the Transport Rules agent.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-TransportRulePredicate
```

This example returns all available conditions for transport rules.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-TransportRulePredicate
```

This example returns a summary list of all predicates.

### Example 1 -------------------------- (Exchange Online)
```
Get-TransportRulePredicate
```

This example returns a summary list of all predicates.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-TransportRulePredicate
```

This example returns a summary list of all predicates.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-TransportRulePredicate -Name SubjectMatches | Format-List
```

This example retrieves the single predicate SubjectMatches. The command is piped to the Format-List command to display detailed transport rule predicate information.


For more information about pipelining, see Pipelining. For more information about how to work with the output of a command, see Working with Command Output.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-TransportRulePredicate -Name SubjectMatches | Format-List
```

This example retrieves the single condition SubjectMatches. The command is piped to the Format-List command to display detailed transport rule condition information.


For more information about pipelining, see Pipelining. For more information about how to work with the output of a command, see Working with command output.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-TransportRulePredicate -Name SubjectMatches | Format-List
```

This example returns detailed information about the predicate named SubjectMatches.


For more information about pipelining, see Pipelining. For more information about how to work with the output of a command, see Working with command output.

### Example 2 -------------------------- (Exchange Online)
```
Get-TransportRulePredicate -Name SubjectMatches | Format-List
```

This example returns detailed information about the predicate named SubjectMatches.


For more information about pipelining, see Pipelining. For more information about how to work with the output of a command, see Working with command output.

### Example 2 -------------------------- (Exchange Online Protection)
```
Get-TransportRulePredicate -Name SubjectMatches | Format-List
```

This example returns detailed information about the predicate named SubjectMatches.


For more information about pipelining, see Pipelining. For more information about how to work with the output of a command, see Working with command output.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-TransportRulePredicate | Where {$_.Name -like '*Attachment*'}
```

This example returns the list of all transport rule conditions related to message attachments by filtering the output..


For more information about how to work with the output of a command, see Working with command output

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-TransportRulePredicate | Where {$_.Name -like "*Attachment*"}
```

This example returns a summary list of all predicates that have Attachment in the name.


For more information about how to work with the output of a command, see Working with command output

### Example 3 -------------------------- (Exchange Online)
```
Get-TransportRulePredicate | Where {$_.Name -like "*Attachment*"}
```

This example returns a summary list of all predicates that have Attachment in the name.


For more information about how to work with the output of a command, see Working with command output

### Example 3 -------------------------- (Exchange Online Protection)
```
Get-TransportRulePredicate | Where {$_.Name -like "*Attachment*"}
```

This example returns a summary list of all predicates that have Attachment in the name.


For more information about how to work with the output of a command, see Working with command output

## PARAMETERS

### -Name
!!! Exchange Server 2010

The Name parameter specifies the predicate to display. For a list of values that can be used with this parameter on the server role that you're administering, see Transport Rule Predicates.



!!! Exchange Server 2013

The Name parameter specifies the condition to display. For a list of values that can be used with this parameter on the server role that you're administering, see Mail flow rule conditions and exceptions (predicates) in Exchange 2013.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Name parameter specifies the name of the predicate that you want to view. To see the list of available names, run the command Get-TransportRulePredicate.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: 1
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

[Online Version](https://technet.microsoft.com/library/3054220d-0973-4832-840e-b9ef9e7c9064.aspx)

