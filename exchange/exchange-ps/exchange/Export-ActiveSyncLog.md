---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Export-ActiveSyncLog

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Export-ActiveSyncLog cmdlet to parse the Internet Information Services (IIS) logs and return information about Microsoft Exchange ActiveSync usage, either on the screen or in an output file.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Export-ActiveSyncLog -Filename <String> [-Confirm] [-EndDate <DateTime>] [-Force] [-OutputPath <String>]
 [-OutputPrefix <String>] [-StartDate <DateTime>] [-UseGMT] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Export-ActiveSyncLog cmdlet parses the IIS log files and returns information about Exchange ActiveSync usage. This cmdlet can export the output to a file or display it in the Exchange Management Shell.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Export-ActiveSyncLog -Filename:"c:\Windows\System32\LogFiles\W2SVC1\ex060812.log" -StartDate:"06/08/12" -EndDate:"06/09/12" -UseGMT:$true -OutputPath:"c:\exreports\easreports"
```

This example exports the Exchange ActiveSync log for the date range 06/08/12 to 06/09/12. The times on the report are in Coordinated Universal Time (UTC) and the report is saved in c:\\exreports\\easreports.

### Example 2
```
Dir D:\Logs\*.log | Export-ActiveSyncLog -Filename:"c:\Windows\System32\LogFiles\W2SVC1\ex072012.log" -StartDate:"06/20/12" -EndDate:"07/20/12" -UseGMT:$true -Force $true -Confirm -OutputPath:"c:\exreports\easreports"
```

This example exports the Exchange ActiveSync log for the date range 06/20/12 to 07/20/12 by reading all log files in the D:\\logs directory. All prompts are suppressed while running the report and a confirmation message is displayed. The times on the report are in UTC and the report is saved in c:\\exreports\\easreports.

### Example 3
```
Export-ActiveSyncLog -Filename: "c:\Windows\System32\LogFiles\W2SVC1\ex020912.log" -StartDate:"02/01/12" -EndDate:"02/09/12" -UseGMT:$true -OutputPath:"c:\exreports\easreports"
```

This example exports the Exchange ActiveSync log for the date range 02/01/12 to 02/09/12. The times on the report are in UTC, and the report is saved in c:\\exreports\\easreports.

## PARAMETERS

### -Filename
The Filename parameter specifies the name of the input file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range of the report.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputPath
The OutputPath parameter specifies the name and location for the output file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputPrefix
The OutputPrefix parameter specifies a prefix to append to the name of the output file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range for the report.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseGMT
The UseGMT switch specifies that Coordinated Universal Time (Greenwich Mean Time) is used for the time in the report output. By default, if this parameter isn't specified, local time is used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/96488cda-9d33-4b67-9e86-2d03e89b1a20.aspx)
