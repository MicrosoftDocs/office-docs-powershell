---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Import-CsDeviceUpdate
schema: 2.0.0
---

# Import-CsDeviceUpdate

## SYNOPSIS

Imports a set of device update rules downloaded from the Microsoft website.
Device update rules associate firmware version updates with hardware devices running Skype for Business Phone Edition.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Import-CsDeviceUpdate [-Identity] <XdsIdentity> -FileName <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

Periodically, Microsoft releases a new set of device update rules for Skype for Business Phone Edition.
These rules represent firmware updates for devices that run Skype for Business Phone Edition.
After these rules have been imported, administrators can test the firmware updates and then, assuming the tests succeed, can make the updates available to all the relevant devices used in the organization.

The only way to create new update rules is to download update packs from Microsoft; you cannot create your own device update rules.
To obtain the latest set of device update rules, go to the Help and Support page on the Microsoft website and search for "Phone Edition".
Download the update package and extract the files to a folder on the computer where the updates are to be uploaded.
After the files have been extracted, you can then use the Import-CsDeviceUpdate cmdlet to import the device update rules found in the extracted .CAB file (which will have the name UCUpdates.cab).

As noted, updates can only be loaded locally; you will need to copy UCUpdates.cab to any computer running the Web Services service that needs to host device update rules.
Keep in mind as well that device update rules are not replicated from server-to-server.
If you want all the device update rules throughout your organization to remain in sync you will need to perform the same operation on each server hosting these rules.
For example, if you remove a rule from one Web Services server you will then need to remove that same rule from your other Web Services servers.
Otherwise, your device update rules will no longer be in sync.

Update rules can only be imported to services; they are not applicable at the global, site, or per-user scopes.
Note, however, that the Import-CsDeviceUpdate cmdlet does not automatically add rules and updates to every service in a site; instead, it loads those rules and updates only to the specified service.
For example, if you have three servers in a site running Web Services, you will need to run the Import-CsDeviceUpdate cmdlet three times, one for each instance of Web Services.
Alternatively, you can use a command like the one shown in Example 3; this one command retrieves the Identity of all your servers Web Services and then runs the Import-CsDeviceUpdate cmdlet against each of those servers.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Import-CsDeviceUpdate -Identity "service:WebServer:atl-cs-001.litwareinc.com" -FileName C:\Updates\UCUpdates.cab
```

The command shown in Example 1 imports device update rules from the file C:\Updates\UCUpdates.cab.

### -------------------------- EXAMPLE 2 -------------------------- 
```

Import-CsDeviceUpdate -Identity "service:WebServer:atl-cs-001.litwareinc.com" -FileName \\\\atl-fs-001\Updates\UCUpdates.cab
```

The command shown in Example 2 imports device update rules from the UNC path \\\\atl-fs-001\Updates\UCUpdates.cab.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsService -WebServer | ForEach-Object {Import-CsDeviceUpdate -Identity $_.Identity -FileName C:\Updates\UCUpdates.cab}
```

Example 3 shows how you can use a single command to import device update rules to all your servers running Web Services.
To do this, the command first calls the Get-CsService cmdlet, along with the WebServer parameter, in order to return a collection of all of your servers running the Web Services service.
This collection is then piped to the ForEach-Object cmdlet, which loops through each server in the collection and uses the Import-CsDeviceUpdate cmdlet to update the latest device update rules to those servers.
Note that this command will work only if you have copied UCUpdates.cab to the same location (C:\Updates) on all your servers.


## PARAMETERS

### -Identity

Indicates the service instance where the new update rules will be applied.
For example: `-Identity "service:WebServer:atl-cs-001.litwareinc.com".`

The Identity should be the fully qualified domain name of the Front End pool where the Web server is installed.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName
Path to the update file (for example, C:\Updates\UCUpdates.cab).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Import-CsDeviceUpdate cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Import-CsDeviceUpdate cmdlet imports instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.Rule class.

## NOTES

## RELATED LINKS

[Get-CsDeviceUpdateRule](Get-CsDeviceUpdateRule.md)

