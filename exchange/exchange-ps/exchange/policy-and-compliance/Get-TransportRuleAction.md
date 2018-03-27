---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-TransportRuleAction

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-TransportRuleAction cmdlet to view the actions that are available for transport rules (mail flow rules).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-TransportRuleAction [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
In on-premises Exchange, the actions that are available on Mailboxes servers and Edge Transports server are different. Also, the names of some of the actions that are returned by this cmdlet are different than the corresponding parameter names in the New-TransportRule and Set-TransportRule cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-TransportRuleAction
```

This example returns a summary list of all actions.

### Example 2
```
Get-TransportRuleAction -Name DeleteMessage | Format-List
```

This example retrieves detailed information about the action named DeleteMessage.

For more information about pipelining, see Pipelining (https://technet.microsoft.com/library/aa998260.aspx). For more information about how to work with the output of a command, see Working with command output (https://technet.microsoft.com/library/bb123533.aspx).

## PARAMETERS

### -Name
The Name parameter specifies the name of the action that you want to view. To see the list of available names, run the command Get-TransportRuleAction.

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

[Online Version](https://technet.microsoft.com/library/60829f04-94a0-4228-a66c-f467aaca438b.aspx)
