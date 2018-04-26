---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Invoke-MonitoringProbe
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Invoke-MonitoringProbe

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Invoke-MonitoringProbe cmdlet to run a Managed Availability probe on a selected server.

This cmdlet cannot be used to run every Managed Availability probe. Only some probes (mainly the deep test probes) can be run manually using this cmdlet. Probes that cannot be run with this cmdlet will generate an error message when Invoke-MonitoringProbe is used to run them.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Invoke-MonitoringProbe [-Identity] <String> -Server <ServerIdParameter> [-Account <String>]
 [-Endpoint <String>] [-ItemTargetExtension <String>] [-Password <String>] [-PropertyOverride <String>]
 [-SecondaryAccount <String>] [-SecondaryEndpoint <String>] [-SecondaryPassword <String>]
 [-TimeOutSeconds <String>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Invoke-MonitoringProbe -Identity ActiveSync.Protocol\ActiveSyncSelfTestProbe -Server EX1
```

This example creates an Exchange ActiveSync monitoring probe on the EX1 server.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the monitoring probe to run.

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

You can't use this parameter to configure other Edge Transport servers remotely.

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

### -Account
The Account parameter specifies the identity of the mailbox or user account that will run the monitoring probe.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Endpoint
The Endpoint parameter specifies the name of the monitoring probe endpoint to connect to, for example, contoso.mail.com.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemTargetExtension
The ItemTargetExtension parameter specifies cmdlet extension data that you can pass to the monitoring probe. The probe that runs on the server may require specific data for its execution. This data is presented to the probe on execution in an XML format.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The Password parameter specifies the password of the mailbox or user account that will run the monitoring probe.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyOverride
The PropertyOverride parameter specifies a property that you want to override, for example, to set the time-out value to be extended beyond the default value.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryAccount
The SecondaryAccount parameter specifies the identity of the delegate mailbox or user account that will run the monitoring probe.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryEndpoint
The SecondaryEndpoint parameter specifies the name of the secondary monitoring probe endpoint to connect to, for example, contoso.mail.fabrikam.com.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryPassword
The SecondaryPassword parameter specifies the password of the delegate mailbox or user account that will run the monitoring probe.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeOutSeconds
The TimeOutSeconds parameter specifies the monitoring operation time-out period.

```yaml
Type: String
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

[Online Version](https://technet.microsoft.com/library/932fada2-3d7a-4caa-b925-b7bfbae3ae51.aspx)
