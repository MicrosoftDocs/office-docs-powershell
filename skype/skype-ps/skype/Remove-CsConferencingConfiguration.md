---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsConferencingConfiguration

## SYNOPSIS
Removes the specified collection of conference configuration settings.
Conference settings determine such things as the maximum-allowed size for conference content and handouts; the content grace period and the URLs for the internal and external downloads of the supported client.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsConferencingConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to user activities, administrators need to manage the Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site and the service scopes) aren't used to specify whether or not a user can share applications during a conference; however, if application sharing is allowed these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

The `Remove-CsConferencingConfiguration` cmdlet provides a way for you to delete any of the custom collections of conferencing configuration settings created for use in your organization.
When you delete a collection of settings, any server previously affected by those settings will automatically come under the jurisdiction of the next collection in the hierarchy (service - site - scope).
If the deleted settings were applied at the service scope, then the servers will be managed by the site settings.
If there are no settings at the site scope then the servers will be managed by the global settings.
Likewise, if you delete settings at the site scope, then servers previously managed by those site settings will be managed by the global settings.

Note that you can also run the `Remove-CsConferencingConfiguration` cmdlet against the global settings.
In that case, however, the global settings will not be removed because Skype for Business Server does not allow you to remove global settings.
Instead, all the properties in the global collection will be reset to their default values.
For example, if you previously changed the maximum content storage value to 200 megabytes, this property will revert to the default value of 100 megabytes.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsConferencingConfiguration -Identity site:Redmond
```

Example 1 deletes the conferencing configuration settings applied to the Redmond site.
When site settings such as these are deleted, users in the site will automatically inherit the settings found in the global conferencing configuration settings.


### -------------------------- Example 2 --------------------------
```
Get-CsConferencingConfiguration -Filter site:* | Remove-CsConferencingConfiguration
```

In Example 2, the command deletes all the conferencing configuration settings applied to the site scope.
To do this, the command first calls the `Get-CsConferencingConfiguration` cmdlet along with the Filter parameter; the filter value "site:" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
This filtered collection is then piped to the `Remove-CsConferencingConfiguration` cmdlet, which deletes each item in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Litwareinc"} | Remove-CsConferencingConfiguration
```

Example 3 deletes all the conferencing configuration settings where the organization is not set to Litwareinc.
To do this, the command first calls the `Get-CsConferencingConfiguration` cmdlet without any parameters; that returns a collection of all the conferencing configuration settings used in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where the Organization property is not equal to Litwareinc.
Finally, the filtered collection is piped to the `Remove-CsConferencingConfiguration` cmdlet, which deletes all the settings in the collection.


## PARAMETERS

### -Identity
Unique identifier of the collection of conferencing configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: `-Identity "site:Redmond"`.
To remove settings configured at the service scope, use syntax similar to this: `-Identity "service:ConferencingServer:atl-cs-001.litwareinc.com"`.

The `Remove-CsConferencingConfiguration` cmdlet can also be run against the global settings.
In that case, however, those settings will not be removed; instead, all the properties will simply be reset to their default values.


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
Suppresses the display of any non-fatal error message that might occur when running the command.

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
Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.
The `Remove-CsConferencingConfiguration` cmdlet accepts pipelined instances of the conferencing configuration object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsConferencingConfiguration` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings object.

## NOTES

## RELATED LINKS

[Get-CsConferencingConfiguration]()

[New-CsConferencingConfiguration]()

[Set-CsConferencingConfiguration]()
