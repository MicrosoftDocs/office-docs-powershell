---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsQoEConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Retrieves one or more collections of Quality of Experience (QoE) settings.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves one or more collections of Quality of Experience (QoE) settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsQoEConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsQoEConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

QoE metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise, and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.
Use this cmdlet to retrieve settings that configure QoE at the global or site level.

QoE is part of the Monitoring Server role; therefore Monitoring Server must be deployed on your Microsoft Lync Server 2010 installation before QoE recording takes effect or any QoE data can be collected.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsQoEConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsQoEConfiguration"}

Below Content Applies To: Lync Server 2013

QoE metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise, and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.
Use this cmdlet to retrieve settings that configure QoE at the global or site level.

QoE is part of the Monitoring Server role; therefore Monitoring Server must be deployed on your Lync Server installation before QoE recording takes effect or any QoE data can be collected.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsQoEConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsQoEConfiguration"}

Below Content Applies To: Skype for Business Server 2015

QoE metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise, and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.
Use this cmdlet to retrieve settings that configure QoE at the global or site level.

QoE is part of the Monitoring Server role; therefore Monitoring Server must be deployed on your Skype for Business Server 2015 installation before QoE recording takes effect or any QoE data can be collected.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsQoEConfiguration
```

This example uses Get-CsQoEConfiguration to return a collection of all the QoE settings configured for use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example uses Get-CsQoEConfiguration to return a collection of all the QoE settings configured for use in your organization.

Get-CsQoEConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the Get-CsQoEConfiguration cmdlet to return a collection of all the QoE settings configured for use in your organization.

Get-CsQoEConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsQoEConfiguration -Identity site:Redmond
```

Example 2 uses the Identity parameter to ensure that Get-CsQoEConfiguration returns only the QoE settings with the Identity site:Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 uses the Identity parameter to ensure that Get-CsQoEConfiguration returns only the QoE settings with the Identity site:Redmond.

Get-CsQoEConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 uses the Identity parameter to ensure that the Get-CsQoEConfiguration cmdlet returns only the QoE settings with the Identity site:Redmond.

Get-CsQoEConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsQoEConfiguration -Filter site:*
```

In Example 3 the Filter parameter is used to return all the QoE settings that have been configured at the site scope.
The wildcard "site:*" returns all the QoE settings that have an Identity beginning with the string value site:.
Settings that meet those criteria are settings that have been configured at the site scope.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3 the Filter parameter is used to return all the QoE settings that have been configured at the site scope.
The wildcard "site:*" returns all the QoE settings that have an Identity beginning with the string value site:.
Settings that meet those criteria are settings that have been configured at the site scope.

Get-CsQoEConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3 the Filter parameter is used to return all the QoE settings that have been configured at the site scope.
The wildcard "site:*" returns all the QoE settings that have an Identity beginning with the string value site:.
Settings that meet those criteria are settings that have been configured at the site scope.

Get-CsQoEConfiguration -Filter site:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsQoEConfiguration | Where-Object {$_.KeepQoEDataForDays -lt 30}
```

The preceding example returns a collection of all the QoE settings where the KeepQoEDataForDays property is less than 30 days.
To do this, the command first uses Get-CsQoEConfiguration to return a collection of all the QoE settings configured in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those settings that have a KeepQoEDataForDays value of less than 30 days.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns a collection of all the QoE settings where the KeepQoEDataForDays property is less than 30 days.
To do this, the command first uses Get-CsQoEConfiguration to return a collection of all the QoE settings configured in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those settings that have a KeepQoEDataForDays value of less than 30 days.

Get-CsQoEConfiguration | Where-Object {$_.KeepQoEDataForDays -lt 30}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns a collection of all the QoE settings where the KeepQoEDataForDays property is less than 30 days.
To do this, the command first uses the Get-CsQoEConfiguration cmdlet to return a collection of all the QoE settings configured in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those settings that have a KeepQoEDataForDays value of less than 30 days.

Get-CsQoEConfiguration | Where-Object {$_.KeepQoEDataForDays -lt 30}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010

The unique identifier of the settings you want to retrieve.
Possible values are global and site:\<site name\>, where \<site name\> is the name of the site in your Lync Server 2010 deployment to which you want to apply the changes.



Below Content Applies To: Lync Server 2013

The unique identifier of the settings you want to retrieve.
Possible values are global and site:\<site name\>, where \<site name\> is the name of the site in your Lync Server deployment to which you want to apply the changes.



Below Content Applies To: Skype for Business Server 2015

The unique identifier of the settings you want to retrieve.
Possible values are global and site:\<site name\>, where \<site name\> is the name of the site in your Skype for Business Server 2015 deployment to which you want to apply the changes.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Below Content Applies To: Lync Server 2010

Enables you to use wildcard characters in order to return a collection (or multiple collections) of QoE configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax:  -Filter site:*.
To return a collection of all the settings that have the string value "Western" somewhere in their Identity (the only property you can filter on) use this syntax:  -Filter *Western*.



Below Content Applies To: Lync Server 2013

Enables you to use wildcard characters in order to return a collection (or multiple collections) of QoE configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "Western" somewhere in their Identity (the only property you can filter on) use this syntax: -Filter *Western*.



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcard characters in order to return a collection (or multiple collections) of QoE configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax:

-Filter site:*

To return a collection of all the settings that have the string value "Western" somewhere in their Identity (the only property you can filter on) use this syntax:

-Filter *Western*



```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the settings from the local replica of the Central Management store.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

## OUTPUTS

###  
Get-CsQoEConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.QoE.QoESettings object.

###  
The Get-CsQoEConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.QoE.QoESettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/e2ed87e0-a5ae-41a2-8572-bda0070c59dc(OCS.14).aspx)

[New-CsQoEConfiguration]()

[Remove-CsQoEConfiguration]()

[Set-CsQoEConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/e2ed87e0-a5ae-41a2-8572-bda0070c59dc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e2ed87e0-a5ae-41a2-8572-bda0070c59dc(OCS.16).aspx)

