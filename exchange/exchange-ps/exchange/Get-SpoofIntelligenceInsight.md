---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-spoofintelligenceinsight
applicable: Exchange Online, Exchange Online Protection
title: Get-SpoofIntelligenceInsight
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-SpoofIntelligenceInsight

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SpoofIntelligenceInsight cmdlet to view spoofed senders that were allowed or blocked by spoof intelligence during the last 30 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SpoofIntelligenceInsight [[-Identity] <HostedConnectionFilterPolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SpoofIntelligenceInsight cmdlet returns the following information:

- SpoofedUser: The sending email address if the domain is one of your organization's domains, or the sending domain if the domain is external.
- SendingInfrastructure: The true sending domain that's found in the DNS record of the source email server. If no domain is found, the source email server's IP address is shown.
- MessageCount: The number of messages.
- LastSeen: The date when the sending email address or domain was last seen by Microsoft 365.
- SpoofType: Indicates whether the domain is internal to your organization or external.
- Action: The two possible values are Allow (messages that contain any spoofed sender email addresses in your organization are allowed from the source email server), and Block (messages that contain any spoofed sender email addresses in your organization are not allowed from the source email server).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SpoofIntelligenceInsight
```

This example returns the list of senders that appear to be sending spoofed email to your organization.

### Example 2
```powershell
$file = "C:\My Documents\Spoof Insights.csv"

Get-SpoofIntelligenceInsight | Export-Csv $file
```

This example exports the same list of spoofed senders to a CSV file.

## PARAMETERS

### -Identity
The Identity parameter is available but isn't used.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
