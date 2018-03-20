---
applicable: Exchange Online
schema: 2.0.0
---

# Get-HybridMailflowDatacenterIPs

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HybridMailflowDatacenterIPs cmdlet to retrieve the IP addresses of the Microsoft Exchange Online Protection (EOP) service data centers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-HybridMailflowDatacenterIPs [<CommonParameters>]
```

## DESCRIPTION
The Get-HybridMailflowDatacenterIPs cmdlet supports hybrid deployments and lists the IP addresses of EOP service data centers that support hybrid deployments. The list isn't specific to any on-premises Exchange organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-HybridMailflowDatacenterIPs
```

This example returns IP address information for EOP service data centers that support hybrid deployments.

## PARAMETERS

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

[Online Version](https://technet.microsoft.com/library/d055d1e1-7f5d-4233-bd68-d449937fb674.aspx)

