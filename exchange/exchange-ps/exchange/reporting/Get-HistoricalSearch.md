---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Get-HistoricalSearch
schema: 2.0.0
monikerRange: "exchonline-ps || eop-ps"
---

# Get-HistoricalSearch

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HistoricalSearch cmdlet to view information about historical searches that have been performed within the last ten days.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-HistoricalSearch [-JobId <Guid>] [<CommonParameters>]
```

## DESCRIPTION
A historical search provides message trace and report details in a comma-separated value (CSV) file for messages that are between seven and ninety days old.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-HistoricalSearch
```

The example returns a summary list of all historical searches that have been performed in the last ten days.

### -------------------------- Example 2 --------------------------
```
Get-HistoricalSearch -JobId f9c66f83-b5c8-4a0c-91f4-a38376f74182 | Format-List
```

This example returns detailed information about the historical search that's in progress that has the identity value f9c66f83-b5c8-4a0c-91f4-a38376f74182.

## PARAMETERS

### -JobId
The JobId parameter specifies the GUID identifier of the historical search that you want to view.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
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

[Online Version](https://technet.microsoft.com/library/70f2ec73-2733-4f87-ac89-1665d575a4dc.aspx)
