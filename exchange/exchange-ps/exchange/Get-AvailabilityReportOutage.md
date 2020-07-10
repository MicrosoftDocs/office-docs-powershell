---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-availabilityreportoutage
applicable: Exchange Server 2010
title: Get-AvailabilityReportOutage
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010"
---

# Get-AvailabilityReportOutage

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-AvailabilityReportOutage cmdlet to return the daily downtime (if any) for each service entity and its overridden value (if set) to the overall reported availability for the day.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AvailabilityReportOutage [[-Identity] <AvailabilityReportOutageIdParameter>] [-ReportDate <ExDateTime>]
 [-ReportingDatabase <String>] [-ReportingServer <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AvailabilityReportOutage
```

This example returns all outages that occurred the previous day. This cmdlet always returns outages for one day.

### Example 2
```powershell
Get-AvailabilityReportOutage -ReportDate:"2009-12-05" -Identity:"Outlook*"
```

This example returns all outages reported for Microsoft Outlook services at all sites on the selected day.

## PARAMETERS

### -Identity
The Identity parameter specifies the outage.

```yaml
Type: AvailabilityReportOutageIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ReportDate
The ReportDate parameter specifies the date to query for the outage report.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportingDatabase
The ReportingDatabase specifies the name of the database on the reporting server.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportingServer
The ReportingServer parameter specifies the name of the reporting database server to connect to.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
