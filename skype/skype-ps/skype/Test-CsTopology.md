---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsTopology
schema: 2.0.0
---

# Test-CsTopology

## SYNOPSIS
Verifies service activation and group permissions for your installation of Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsTopology [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-Service <String>]
 [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsTopology` cmdlet provides a way for you to verify that Skype for Business Server is functioning correctly at a global level.
By default, the cmdlet checks your entire Skype for Business Server infrastructure, verifying that the required services are running and that the appropriate permissions have been set for these services and for the universal security groups created when you install Skype for Business Server.

In addition to verifying the validity of Skype for Business Server as a whole, the `Test-CsTopology` cmdlet also lets you check the validity of a specific service.
For example, this command checks the state of the A/V Conferencing Server on the pool atl-cs-001.litwareinc.com:

`Test-CsTopology -Service "ConferencingServer:atl-cs-001.litwareinc.com"`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsTopology
```

Example 1 validates the entire Skype for Business Server topology.


### -------------------------- Example 2 --------------------------
```
Test-CsTopology -Report "C:\Logs\Topology.xml"
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is included to specify the location (C:\Logs\Topology.xml) where the output file should be written.


### -------------------------- Example 3 --------------------------
```
Test-CsTopology -Service "Registrar:atl-cs-001.litwareinc.com"
```

In Example 3, the `Test-CsTopology` cmdlet is used to validate a single service: Registrar:atl-cs-001.litwareinc.com.


## PARAMETERS

### -GlobalCatalog
Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the `Test-CsTopology` cmdlet on a computer with an account in your domain.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Service
When present, the `Test-CsTopology` cmdlet limits its validation checks to the specified service.
(Note that you can only specify one service at a time when using the Service parameter.) Services should be specified using the appropriate service ID; for example, this syntax refers to the Registrar service on the atl-cs-001.litwareinc.com pool:

`-Service "Registrar:atl-cs-001.litwareinc.com"`

If this parameter is not included then the entire topology will be validated.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\Topology.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Test-CsTopology` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsTopology` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Enable-CsTopology](Enable-CsTopology.md)

[Get-CsTopology](Get-CsTopology.md)

[Publish-CsTopology](Publish-CsTopology.md)

