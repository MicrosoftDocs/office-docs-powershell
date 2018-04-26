---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Get-MonitoringItemHelp
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-MonitoringItemHelp

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MonitoringItemHelp cmdlet to discover the monitoring items that you can use to return health information about your Exchange servers. Monitoring items are preconfigured to help you with your server health and monitoring.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MonitoringItemHelp [-Identity] <String> -Server <ServerIdParameter> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MonitoringItemHelp -Server Exch01 -Identity OutlookMapiHttp.Proxy\CrashEvent.msexchangemapifrontendapppoolEscalate\msexchangemapifrontendapppool | Format-List
```

This example retrieves health set information for a monitoring item on the server named Exch01 and displays the output without truncating the results..

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the monitoring item. The parameter uses the syntax \<HealthSet\>\\\<MonitoringItemName\>[\\\<TargetResource\>]. You can find the available values in the Identity property of the output of the Get-MonitoringItem cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
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

[Online Version](https://technet.microsoft.com/library/4e0bfa98-4c3d-46a5-bb18-8f64a2108c0a.aspx)
