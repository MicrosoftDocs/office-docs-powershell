---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/get-cspoolfabricstate
schema: 2.0.0
title: Get-CsPoolFabricState
---

# Get-CsPoolFabricState

## SYNOPSIS
Returns the Windows Fabric state for a Skype for Business Server pool.
Windows Fabric is a Microsoft technology used for creating highly reliable, distributable, and scalable applications.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### RoutingGroup
```
Get-CsPoolFabricState [-RoutingGroup] <String> [-ReplicaBuildProgress] [-Force] [-MinutesToPoll <Int32>]
 [-PollInterval <Int32>] [-ReplicaBuildProgressTimeout <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Tenant
```
Get-CsPoolFabricState [-Tenant] <Guid> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### User
```
Get-CsPoolFabricState [-UserUri] <UserIdParameter> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### PoolFqdn
```
Get-CsPoolFabricState -PoolFqdn <String> [-HealthState <String>] [-ShowAll] [-OutputCsvFile <String>]
 [-ServiceName <String>] [-Force] [-Type <String>] [-QueryTimeout <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-CsPoolFabricState cmdlet returns the Windows Fabric state for a Skype for Business Server pool.
This includes information about Windows Fabric replica instances for any (or all) of the following services: MCU factory; Conference Directory; Routing; Skype for Business Server Storage Service.

The functions carried out by the Get-CsPoolFabricState cmdlet are not available in Skype for Business Server Control Panel.

## EXAMPLES

### Example 1
```
Get-CsPoolFabricState -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 returns the fabric state for the pool atl-cs-001.litwareinc.com.
Because the Type parameter was not included, state information for all the services on the pool will be returned.

### Example 2
```
Get-CsPoolFabricState -PoolFqdn "atl-cs-001.litwareinc.com" -Type MCU
```

Example 2 returns the fabric state for a single service on the pool atl-cs-001.litwareinc.com: the MCU factory service.
This is done by including the Type parameter and the parameter value "MCU".


## PARAMETERS

### -Force

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -HealthState

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: String

```yaml
Type: System.String
Parameter Sets: PoolFqdn
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinutesToPoll
Max number of minutes for which the cmdlet will poll cluster manager for replica build progress

```yaml
Type: System.Int32
Parameter Sets: RoutingGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputCsvFile

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: PoolFqdn
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PollInterval
Interval in seconds between cluster manager polls for replica build progress

```yaml
Type: System.Int32
Parameter Sets: RoutingGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name of the pool being checked.
You must supply the FQDN of a pool when calling this cmdlet; for example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: System.String
Parameter Sets: PoolFqdn
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryTimeout
Query timeout period in minutes to retrieve the state of fabric services.

```yaml
Type: System.Int32
Parameter Sets: PoolFqdn
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicaBuildProgress
If a replica is being built for the given RG, polls for the status of the build

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: RoutingGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicaBuildProgressTimeout
The number of seconds for which no replica build progress has been made before considering progress to be stuck

```yaml
Type: System.Int32
Parameter Sets: RoutingGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingGroup

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Windows Fabric routing group to be returned.
Routing groups are used to specify the servers that users log onto.

```yaml
Type: System.String
Parameter Sets: RoutingGroup
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceName

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: String

```yaml
Type: System.String
Parameter Sets: PoolFqdn
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowAll

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: SwitchParameter

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: PoolFqdn
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Skype for Business Online tenant account whose Windows Fabric pool state is being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: System.Guid
Parameter Sets: Tenant
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Specifies the service type to be returned.
Allowed values are:

* All (returns information for all services)
* MCUFactory (returns information for the MCU factory service)
* ConferenceDirectory (returns information for the Conference Directory service)

LYSS (returns information for the Lync Server Storage service)

You can only specify a single type per command.

```yaml
Type: System.String
Parameter Sets: PoolFqdn
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserUri

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables you to check the Windows fabric state for the pool used by a specific user.
For example, to check the Windows fabric state for the user Ken Myer use this syntax:

`-UserUri "sip:kenmyer@litwareinc.com"`

Note that you can only specify one user URI per command.

```yaml
Type: Microsoft.Rtc.Management.AD.UserIdParameter
Parameter Sets: User
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### String
String value representing the fabric state.

## NOTES

## RELATED LINKS
