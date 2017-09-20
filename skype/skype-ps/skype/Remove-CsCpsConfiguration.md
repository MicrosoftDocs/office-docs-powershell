---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsCpsConfiguration
schema: 2.0.0
---

# Remove-CsCpsConfiguration

## SYNOPSIS
Removes an existing Call Park service configuration.
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range, or orbit and then immediately places the call on hold.
Anyone (not just the person who originally answered the call) can resume the conversation from any telephone simply by entering the correct number.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsCpsConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to remove a Call Park service configuration.
A Call Park service configuration specifies what happens to a call after it has been parked.
For example, if a parked call isn't answered after a period of time it can be automatically forwarded to someone else, such as an administrator, or to a Response Group.
Calls can be configured to ring after a certain period of time to ensure the call isn't forgotten.
In addition, Call Park service can be configured to play music on hold to the caller while the call is parked.

This cmdlet can be used to remove any Call Park configurations, including the Global configuration.
In the case of the Global configuration, however, the configuration will not actually be removed; instead, it will simply be reset to the default values.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsCpsConfiguration -Identity site:Redmond1
```

Example 1 uses the `Remove-CsCpsConfiguration` cmdlet to delete the Call Park service configuration with the Identity site:Redmond1.
Because identities are unique, this command will result in only one configuration being deleted.


### -------------------------- Example 2 --------------------------
```
Get-CsCpsConfiguration -Filter site:* | Remove-CsCpsConfiguration
```

In Example 2, all the Call Park service configurations that have been defined at the site scope are deleted.
To carry out this task, the command first uses the `Get-CsCpsConfiguration` cmdlet and the Filter parameter to return all the Call Park service configurations that have been defined at the site scope; the wildcard site:* ensures that only settings that have an Identity that begins with the string value site: will be returned.
This filtered collection is then piped to the `Remove-CsCpsConfiguration` cmdlet, which proceeds to delete each item in the collection.
Note that any time you remove Call Park service settings from a site, the site will automatically begin to use the Call Park service settings configured at the global scope.


## PARAMETERS

### -Identity
The unique identifier of the Call Park service configuration you want to remove.
This identifier will be either Global or site:\<sitename\>, where \<sitename\> is the name of the site to which the configuration applies.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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
Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings object.
Accepts pipelined input of Call Park service configuration objects.

## OUTPUTS

###  
Removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings.

## NOTES

## RELATED LINKS

[New-CsCpsConfiguration]()

[Set-CsCpsConfiguration]()

[Get-CsCpsConfiguration]()

[Set-CsCallParkServiceMusicOnHoldFile]()
