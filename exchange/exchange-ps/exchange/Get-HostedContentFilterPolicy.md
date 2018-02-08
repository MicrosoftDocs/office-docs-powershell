---
applicable: Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-HostedContentFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HostedContentFilterPolicy cmdlet to view the settings of content filter policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-HostedContentFilterPolicy [[-Identity] <HostedContentFilterPolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Online)
```
Get-HostedContentFilterPolicy
```

This example shows a summary list of all the content filter policies in your cloud-based organization.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-HostedContentFilterPolicy
```

This example shows a summary list of all the content filter policies in your cloud-based organization.

### Example 2 -------------------------- (Exchange Online)
```
Get-HostedContentFilterPolicy Default | Format-List
```

This example retrieves details about the content filter policy named Default.

### Example 2 -------------------------- (Exchange Online Protection)
```
Get-HostedContentFilterPolicy Default | Format-List
```

This example retrieves details about the content filter policy named Default.

## PARAMETERS

### -Identity
The Identity parameter specifies the content filter policy that you want to view. You can use any value that uniquely identifies the policy. For example, you can use the name, GUID or distinguished name (DN) of the content filter policy.

```yaml
Type: HostedContentFilterPolicyIdParameter
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

[Online Version](https://technet.microsoft.com/library/d510471a-dda5-4df7-b3f8-2ee7a1948436.aspx)

