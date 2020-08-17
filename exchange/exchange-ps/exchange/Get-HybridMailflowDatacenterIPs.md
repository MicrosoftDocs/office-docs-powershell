---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-hybridmailflowdatacenterips
applicable: Exchange Online
title: Get-HybridMailflowDatacenterIPs
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-HybridMailflowDatacenterIPs

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: This cmdlet has been deprecated and is no longer used.

Use the Get-HybridMailflowDatacenterIPs cmdlet to retrieve the IP addresses of the Microsoft Exchange Online Protection (EOP) service data centers.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Conect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HybridMailflowDatacenterIPs [<CommonParameters>]
```

## DESCRIPTION
The Get-HybridMailflowDatacenterIPs cmdlet supports hybrid deployments and lists the IP addresses of EOP service data centers that support hybrid deployments. The list isn't specific to any on-premises Exchange organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-HybridMailflowDatacenterIPs
```

This example returns IP address information for EOP service data centers that support hybrid deployments.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
