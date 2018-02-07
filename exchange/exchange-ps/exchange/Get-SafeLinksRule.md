---
applicable: Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-SafeLinksRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SafeLinksRule cmdlet to view Safe Links rules in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SafeLinksRule [[-Identity] <RuleIdParameter>] [-State <Enabled | Disabled>] [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Online)
```
Get-SafeLinksRule | Format-Table -Auto Name,State,Priority,SafeLinksPolicy,Comments
```

This example returns a summary list of all Safe Links rules in your organization.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-SafeLinksRule | Format-Table -Auto Name,State,Priority,SafeLinksPolicy,Comments
```

This example returns a summary list of all Safe Links rules in your organization.

### Example 2 -------------------------- (Exchange Online)
```
Get-SafeLinksRule -Identity "Research Department URL Rule"
```

This example returns detailed information about the Safe Links rule named Research Department URL Rule.

### Example 2 -------------------------- (Exchange Online Protection)
```
Get-SafeLinksRule -Identity "Research Department URL Rule"
```

This example returns detailed information about the Safe Links rule named Research Department URL Rule.

## PARAMETERS

### -Identity
The Identity parameter specifies the Safe Links rule that you want to view.

You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguised name (DN)

- GUID

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -State
The State parameter filters the results by the state of the rule. Valid values are Enabled and Disabled.

```yaml
Type: Enabled | Disabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/57bed861-31c9-428d-bbd7-165ce7743ae6.aspx)

