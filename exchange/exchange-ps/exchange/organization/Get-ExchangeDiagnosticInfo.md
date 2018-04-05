---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-ExchangeDiagnosticInfo
schema: 2.0.0
---

# Get-ExchangeDiagnosticInfo

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeDiagnosticInfo cmdlet to return information about processes that are running on Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ExchangeDiagnosticInfo [-Argument <String>] [-Component <String>] [-Process <String>]
 [-Server <ServerIdParameter>] [-Unlimited] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ExchangeDiagnosticInfo
```

This example returns a summary list of all Exchange processes that are running on the server.

### -------------------------- Example 2 --------------------------
```
[xml]$edi = Get-ExchangeDiagnosticInfo; $edi.Diagnostics.Processlocator.Process | Format-Table -Auto Name,ID,Guid
```

This example display the XML output of the command in format that's easier to read.

## PARAMETERS

### -Argument
The Argument parameter specifies a valid argument to use with the specified Component value.

Common Argument values that you can use with virtually Component value are Help and Verbose.

To see the Argument values that are available for a given Component value, run the command Get-ExchangeDiagnosticInfo -Process \<ProcessName\> -Component \<ComponentName\> -Argument Help

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

### -Component
The Component parameter returns detailed information for the specified Component of the given Process value.

To see the Component values that are available for a given Process value, run the command Get-ExchangeDiagnosticInfo -Process \<ProcessName\> -Argument Help.

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

### -Process
The Process parameter provides details for the specified Exchange process. Valid values are the name of the process (for example, MSExchangeTransport or Microsoft.Exchange.Directory.TopologyService).

To see the list of available Exchange processes, run the command Get-ExchangeDiagnosticInfo.

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

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Unlimited
The Unlimited switch tells the command to return all available information. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
