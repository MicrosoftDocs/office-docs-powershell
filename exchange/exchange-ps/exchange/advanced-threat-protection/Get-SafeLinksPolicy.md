---
applicable: Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-SafeLinksPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SafeLinksPolicy cmdlet to view Safe Links policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SafeLinksPolicy [[-Identity] <SafeLinksPolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-SafeLinksPolicy | Format-Table Name,IsEnabled,IsDefault
```

This example shows a summary list of all Safe Links policies.

### Example 2
```
Get-SafeLinksPolicy -Identity Default
```

This example shows detailed information about the Safe Links policy named Default.

## PARAMETERS

### -Identity
The Identity parameter specifies the Safe Links policy that you want to view.

You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: SafeLinksPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/d847809d-bdad-4d3b-b62e-be67411a6372.aspx)
