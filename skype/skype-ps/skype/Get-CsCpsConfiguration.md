---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsCpsConfiguration
schema: 2.0.0
---

# Get-CsCpsConfiguration

## SYNOPSIS
Returns information about the Call Park service.
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range, or orbit, and then immediately places the call on hold.
Anyone (not just the person who originally answered the call) can resume the conversation from any telephone in the system by entering the correct number.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsCpsConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsCpsConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to retrieve one or more Call Park service configurations.
A Call Park service configuration specifies what happens to a call once it's parked.
For example, if a parked call isn't answered after a period of time it can be automatically forwarded to someone else, such as an administrator, or to a Response Group.
Calls can also be configured to ring after a certain period of time to ensure the call isn't forgotten.
In addition, Call Park service can be configured to play music on hold to the caller while the call is parked.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCpsConfiguration
```

Example 1 retrieves a collection of all the Call Park service configurations that have been defined for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsCpsConfiguration -Identity site:Redmond1
```

Example 2 retrieves only the Call Park service configurations with the Identity site:Redmond1.

### -------------------------- Example 3 --------------------------
```
Get-CsCpsConfiguration -Filter site:*
```

In Example 3, the Filter parameter is used to return all the Call Park service configurations that have been configured at the site scope.
The wildcard string site:* tells the Get-CsCpsConfiguration cmdlet to return only those settings where the Identity begins with the string value site:.

### -------------------------- Example 4 --------------------------
```
Get-CsCpsConfiguration -Filter *:re*
```

As in Example 3, in this example we use the Filter parameter to retrieve a subset of all the defined Call Park service configurations.
In this case, we filter on the string *:re*, which will return Call Park configurations for all sites with names beginning with the letters re, such as Redmond1, Redmond2, and RemoteComputer.

### -------------------------- Example 5 --------------------------
```
Get-CsCpsConfiguration | Where-Object {$_.EnableMusicOnHold -eq $False}
```

Example 5 returns all the Call Park service settings that do not play music when a caller is placed on hold.
To do this, the command first uses the Get-CsCpsConfiguration cmdlet to retrieve all the Call Park service settings configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which, in turn, applies a filter that limits the returned data to those items where the EnableMusicOnHold property is equal to (-eq) False.


## PARAMETERS

### -Identity
The unique identifier of the Call Park service configuration you want to retrieve.
This identifier will be either Global or site:\<sitename\>, where \<sitename\> is the name of the site to which the configuration applies.

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
Allows you to do a wildcard search to retrieve only those configurations with Identity values matching the wildcard string.

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
Retrieves the Call Park service information from the local replica of the Central Management store, rather than the Central Management store itself.

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings


## NOTES


## RELATED LINKS

[New-CsCpsConfiguration](New-CsCpsConfiguration.md)

[Remove-CsCpsConfiguration](Remove-CsCpsConfiguration.md)

[Set-CsCpsConfiguration](Set-CsCpsConfiguration.md)

[Set-CsCallParkServiceMusicOnHoldFile](Set-CsCallParkServiceMusicOnHoldFile.md)
