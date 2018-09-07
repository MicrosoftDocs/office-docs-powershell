---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010
title: Set-AvailabilityReportOutage
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Set-AvailabilityReportOutage

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Set-AvailabilityReportOutage cmdlet to set the outages that contribute to the overall reported availability for the day.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Set-AvailabilityReportOutage [-Identity] <AvailabilityReportOutageIdParameter> -Comment <String>
 -ReportDate <ExDateTime> [-Confirm] [-DowntimeMinutes <Double>] [-Force] [-ReportingDatabase <String>]
 [-ReportingServer <Fqdn>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Set-AvailabilityReportOutage [-Identity] <AvailabilityReportOutageIdParameter> -ReportDate <ExDateTime>
 [-ResetToOriginal] [-Confirm] [-Force] [-ReportingDatabase <String>] [-ReportingServer <Fqdn>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-AvailabilityReportOutage -ReportDate:"2009-12-02" -Identity: "OWA Service" -Comment:"Overriding particular outage" -DowntimeMinutes:40
```

This example overrides the specified outage with a new downtime value of 40 minutes.

## PARAMETERS

### -Comment
The Comment parameter describes the outage that was inserted.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the outage to add to the outage reporting.

```yaml
Type: AvailabilityReportOutageIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
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
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResetToOriginal
The ResetToOriginal parameter specifies whether to reset the previously selected outage value to the default value.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DowntimeMinutes
The DowntimeMinutes parameter specifies the number of minutes of downtime to insert into the outage report.

```yaml
Type: Double
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force parameter suppresses the warning or confirmation messages that appear during specific configuration changes.

```yaml
Type: SwitchParameter
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
The ReportingDatabase parameter specifies the name of the database on the reporting server.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/75b9241f-d0d8-4c31-8800-9e98188ab2b9.aspx)
