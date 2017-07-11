---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsTopology

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Verifies service activation and group permissions for your installation of Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Verifies service activation and group permissions for your installation of Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Verifies service activation and group permissions for your installation of Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsTopology [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-Service <String>]
 [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Test-CsTopology cmdlet provides a way for you to verify that Lync Server 2010 is functioning correctly at a global level.
By default, the cmdlet checks your entire Lync Server infrastructure, verifying that the required services are running and that the appropriate permissions have been set for these services and for the universal security groups created when you install Lync Server.

In addition to verifying the validity of Lync Server as a whole, Test-CsTopology also lets you check the validity of a specific service.
For example, this command checks the state of the A/V Conferencing server on the pool atl-cs-001.litwareinc.com:

Test-CsTopology -Service "ConferencingServer:atl-cs-001.litwareinc.com".

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsTopology"}

**Below Content Applies To:** Lync Server 2013

The Test-CsTopology cmdlet provides a way for you to verify that Lync Server is functioning correctly at a global level.
By default, the cmdlet checks your entire Lync Server infrastructure, verifying that the required services are running and that the appropriate permissions have been set for these services and for the universal security groups created when you install Lync Server.

In addition to verifying the validity of Lync Server as a whole, Test-CsTopology also lets you check the validity of a specific service.
For example, this command checks the state of the A/V Conferencing Server on the pool atl-cs-001.litwareinc.com:

Test-CsTopology -Service "ConferencingServer:atl-cs-001.litwareinc.com".

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsTopology"}

**Below Content Applies To:** Skype for Business Server 2015

The Test-CsTopology cmdlet provides a way for you to verify that Skype for Business Server 2015 is functioning correctly at a global level.
By default, the cmdlet checks your entire Skype for Business Server 2015 infrastructure, verifying that the required services are running and that the appropriate permissions have been set for these services and for the universal security groups created when you install Skype for Business Server 2015.

In addition to verifying the validity of Skype for Business Server 2015 as a whole, the Test-CsTopology cmdlet also lets you check the validity of a specific service.
For example, this command checks the state of the A/V Conferencing Server on the pool atl-cs-001.litwareinc.com:

Test-CsTopology -Service "ConferencingServer:atl-cs-001.litwareinc.com"



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Test-CsTopology
```

The preceding command validates the entire Lync Server topology.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 validates the entire Lync Server topology.

Test-CsTopology

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 validates the entire Skype for Business Server 2015 topology.

Test-CsTopology

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Test-CsTopology -Report "C:\Logs\Topology.xml"
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is included to specify the location (C:\Logs\Topology.xml) where the output file should be written.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is included to specify the location (C:\Logs\Topology.xml) where the output file should be written.

Test-CsTopology -Report "C:\Logs\Topology.xml"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is included to specify the location (C:\Logs\Topology.xml) where the output file should be written.

Test-CsTopology -Report "C:\Logs\Topology.xml"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Test-CsTopology -Service "Registrar:atl-cs-001.litwareinc.com"
```

In Example 3, Test-CsTopology is used to validate a single service: Registrar:atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, Test-CsTopology is used to validate a single service: Registrar:atl-cs-001.litwareinc.com.

Test-CsTopology -Service "Registrar:atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Test-CsTopology cmdlet is used to validate a single service: Registrar:atl-cs-001.litwareinc.com.

Test-CsTopology -Service "Registrar:atl-cs-001.litwareinc.com"

## PARAMETERS

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running Test-CsTopology on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Test-CsTopology cmdlet on a computer with an account in your domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services (AD DS), then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.



**Below Content Applies To:** Skype for Business Server 2015

FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Service
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

When present, Test-CsTopology limits its validation checks to the specified service.
(Note that you can only specify one service at a time when using the Service parameter.) Services should be specified using the appropriate service ID; for example, this syntax refers to the Registrar service on the atl-cs-001.litwareinc.com pool: -Service "Registrar:atl-cs-001.litwareinc.com".

If this parameter is not included then the entire topology will be validated.



**Below Content Applies To:** Skype for Business Server 2015

When present, the Test-CsTopology cmdlet limits its validation checks to the specified service.
(Note that you can only specify one service at a time when using the Service parameter.) Services should be specified using the appropriate service ID; for example, this syntax refers to the Registrar service on the atl-cs-001.litwareinc.com pool:

-Service "Registrar:atl-cs-001.litwareinc.com"

If this parameter is not included then the entire topology will be validated.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\Topology.html"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Test-CsTopology does not accept pipelined input.

###  
None.
The Test-CsTopology cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsTopology returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsTopology cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/06ffa245-f1c7-46b7-9be6-5b291deda5c1(OCS.14).aspx)

[Enable-CsTopology]()

[Get-CsTopology]()

[Publish-CsTopology]()

[Online Version](http://technet.microsoft.com/EN-US/library/06ffa245-f1c7-46b7-9be6-5b291deda5c1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/06ffa245-f1c7-46b7-9be6-5b291deda5c1(OCS.16).aspx)

