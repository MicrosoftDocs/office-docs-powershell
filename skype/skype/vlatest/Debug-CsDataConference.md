---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Debug-CsDataConference

## SYNOPSIS
Returns diagnostic information for the data conferencing capabilities included in Skype for Business Server.

## SYNTAX

```
Debug-CsDataConference [-Force] [-Report <String>] [-TargetFqdn <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
The functions carried out by the Debug-CsDataConference cmdlet are not available in the Skype for Business Server Control Panel.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Debug-CsDataConference
```

The command shown in Example 1 returns diagnostic information for the Conferencing Server installed on the local computer.

### -------------------------- Example 2 --------------------------
```
Debug-CsDataConference -TargetFqdn "atl-cs-001.litwareinc.com"
```

In Example 2, diagnostic information is returned for the Conferencing Server installed on the remote computer atl-cs-001.litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Debug-CsDataConference | Select-Object -ExpandProperty Details | Format-List
```

Example 3 returns detailed Conferencing Server diagnostic information for the local computer, but displays this information in an easy-to-read format.
To do this, the command first calls the Debug-CsDataConference cmdlet to return the diagnostic information.
That information is then piped to the Select-Object cmdlet.
The Select-Object cmdlet uses the ExpandProperty parameter to return complete information for the Details property.
(By default, only a small portion of the data in the Details property is displayed onscreen.) Finally, the data found in the Details property is piped to the Format-List cmdlet, which displays the data in an easy-to-read format.


## PARAMETERS

### -Force
Suppresses the display of any nonfatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: 

`-Report "C:\Logs\DataConference.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name of the computer where the Skype for Business Server 2015 Conferencing Server is installed.
If this parameter is not included, the Debug-CsDataConference cmdlet will run against the local computer.
If Conferencing Server is not installed on the local computer, an error will occur.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
The Debug-CsDataConference cmdlet does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Management.DataCollabDiag.ServerResult

## NOTES

## RELATED LINKS

[Test-CsDataConference]()