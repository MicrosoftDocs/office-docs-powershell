---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsAVEdgeConfiguration
schema: 2.0.0
---

# Get-CsAVEdgeConfiguration

## SYNOPSIS
Returns configuration information for computers running the A/V Edge service in your organization.
The configuration settings on these computers, also known as A/V Edge servers, enable internal users to share audio and video data with external users (that is, users who are not logged on to your internal network), as well as exchange files and participate in desktop sharing sessions.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsAVEdgeConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsAVEdgeConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
An A/V Edge server provides a way for audio and video traffic to be exchanged across an organization's firewall.
Among other things, this enables users to use Skype for Business Server across the Internet, and then exchange audio and video data with users who have logged onto the system from inside the firewall.
Edge Server configuration settings can be assigned at the global scope, the site scope, and the service scope.
The A/V Edge configuration settings enable administrators to do such things as manage the amount of time that user authentication is valid before it must be renewed, and to limit the amount of bandwidth that can be used by a single user or a single port.

The Get-CsAVEdgeConfiguration cmdlet provides a way for you to retrieve information about the A/V Edge configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAVEdgeConfiguration
```

The command shown in Example 1 returns a collection of all the A/V Edge configuration settings configured for use in the organization.
Calling the Get-CsAVEdgeConfiguration cmdlet without any additional parameters always returns a complete collection of A/V Edge configuration settings.

### -------------------------- Example 2 --------------------------
```
Get-CsAVEdgeConfiguration -Identity site:Redmond
```

In Example 2 a single collection of A/V Edge configuration settings is returned: the collection that has the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsAVEdgeConfiguration -Filter "site:*"
```

Example 3 returns a collection of all the A/V Edge configuration settings that have been configured at the site scope.
To do this, the Get-CsAVEdgeConfiguration cmdlet is called along with the Filter parameter; the filter value "site:*" limits the returned data to settings that have an Identity that begins with the characters "site:".
By definition, that limits the returned data to settings configured at the site scope.

### -------------------------- Example 4 --------------------------
```
Get-CsAVEdgeConfiguration | Where-Object {$_.MaxBandwidthPerUserKB -gt 10000}
```

In Example 4, the only A/V Edge configuration settings that are returned are those where the MaxBandwidthPerUserKB property is greater than 10,000 kilobits per second.
To perform this task, the command first calls the Get-CsAVEdgeConfiguration cmdlet without any parameters; that returns a collection of all the A/V Edge configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only the settings where the MaxBandwidthPerUserKB is greater than 10000 kilobits per second.

### -------------------------- Example 5 --------------------------
```
Get-CsAVEdgeConfiguration | Where-Object {$_.MaxBandwidthPerUserKB -eq 10000}
```

Example 5 is similar to the command shown in Example 4; in Example 5, however, the only A/V Edge settings returned are those where the MaxBandwidthPerUserKB property is exactly equal to 10000 kilobits per second.

### -------------------------- Example 6 --------------------------
```
Get-CsAVEdgeConfiguration | Where-Object {$_.MaxTokenLifetime -lt "08:00:00"}
```

The command shown in Example 6 returns only the A/V Edge configuration settings where the MaxTokenLifetime property is less than 8 hours (08 hours : 00 minutes : 00 seconds).
The command first calls the Get-CsAVEdgeConfiguration cmdlet without any parameters in order to return a collection of all the A/V Edge configuration settings used in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only the settings where the MaxTokenLifetime is less than 8 hours (08:00:00).


## PARAMETERS

### -Identity
Unique identifier for the collection of A/V Edge configuration settings to be retrieved.
To retrieve the global collection, use the following syntax: -Identity global.
To retrieve a site collection use syntax similar to this: -Identity site:Redmond.
Settings configured at the service scope should be referred to using syntax similar to this: 

`-Identity service:EdgeServer:atl-cs-001.litwareinc.com`

Note that you cannot use wildcards when specifying a policy Identity.

If this parameter is not included, the Get-CsAVEdgeConfiguration cmdlet returns a collection of all the Edge configuration settings currently in use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the A/V Edge configuration settings to be returned.
For example, to return all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings configured at the service, use this syntax: -Filter "service:*".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the A/V Edge configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.Edge.MediaRelaySettings


## NOTES


## RELATED LINKS

[New-CsAVEdgeConfiguration](New-CsAVEdgeConfiguration.md)

[Remove-CsAVEdgeConfiguration](Remove-CsAVEdgeConfiguration.md)

[Set-CsAVEdgeConfiguration](Set-CsAVEdgeConfiguration.md)

