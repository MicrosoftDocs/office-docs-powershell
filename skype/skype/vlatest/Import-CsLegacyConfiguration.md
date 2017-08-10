---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Import-CsLegacyConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Import-CsLegacyConfiguration enables you to import a number of configuration settings from Microsoft Office Communications Server 2007 R2 or Microsoft Office Communications Server 2007 to Microsoft Lync Server 2010.
This helps provide interoperability between Lync Server 2010 and your earlier installation of Office Communications Server 2007 R2 or Office Communications Server 2007.

**Below Content Applies To:** Lync Server 2013

Import-CsLegacyConfiguration enables you to import a number of configuration settings from Microsoft Office Communications Server 2007 R2 or Microsoft Office Communications Server 2007 to Lync Server.
This helps provide interoperability between Lync Server and your earlier installation of Office Communications Server 2007 R2 or Office Communications Server 2007.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

The Import-CsLegacyConfiguration cmdlet enables you to import a number of configuration settings from Microsoft Office Communications Server 2007 R2 or Microsoft Office Communications Server 2007 to Skype for Business Server 2015.
This helps provide interoperability between Skype for Business Server 2015 and your earlier installation of Office Communications Server 2007 R2 or Office Communications Server 2007.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Import-CsLegacyConfiguration [-ReplaceExisting] [-Force] [-Report <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Import-CsLegacyConfiguration is used in conjunction with the Merge-CsLegacyTopology cmdlet to enable organizations to migrate from a previous version of Office Communications Server (either Office Communications Server 2007 R2 or Office Communications Server 2007) to Lync Server 2010. 
Import-CsLegacyConfiguration is used to import voice policies; location profiles (for instance, dial plans); voice routes; voice normalization rules; meeting policies; external access policies; archiving policies; presence policies; Communicator Web Access  URL settings; and dial-in conferencing access numbers.

Before you can run Import-CsLegacyConfiguration, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
After installing the Compatibility interfaces package, you should next run Merge-CsLegacyTopology.
When Merge-CsLegacyTopology finishes, you should publish the merged topology by using Topology Builder.
After publishing the merged topology, you can then call Import-CsLegacyConfiguration.
The Import-CsLegacyConfiguration cmdlet uses WMI to read legacy data from the earlier version of Office Communications Server.
Import-CsLegacyConfiguration then takes the retrieved data and creates corresponding objects in Lync Server.
For example, for each voice policy found in your installation of Office Communications Server, a corresponding voice policy will be created in your new installation of Lync Server.

Import-CsLegacyConfiguration should be re-run whenever you make changes to any of the following Office Communications Server items: voice policies; location profiles; voice routes; voice normalization rules; meeting policies; external access policies; archiving policies; presence policies; Communicator Web Access URL settings; and dial-in conferencing access numbers.
By default, only new items added to your Office Communications Server topology will be imported when you re-run Import-CsLegacyConfiguration.
To import modified objects you must do two things.
First, confirm that no changes have been made to the corresponding item (for example, a voice policy) in the Lync Server copy of the configuration.
Second, run Import-CsLegacyConfiguration along with the ReplaceExisting parameter; this causes Import-CsLegacyConfiguration to import modified objects and to overwrite the corresponding object currently in Lync Server.
Note that objects deleted from the Communications Server 2007 R2 topology do not result in corresponding deletions in Lync Server.
You will need to manually remove those in Lync Server.

It's important to know that the Move-CsLegacyUser cmdlet relies on information imported by Import-CsLegacyConfiguration.
That means that, when running Move-CsLegacyUser, you might receive an error message telling you that you must run Import-CsLegacyConfiguration before proceeding.
If that happens you must re-run Import-CsLegacyConfiguration before you will be able to move the legacy user.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Import-CsLegacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Import-CsLegacyConfiguration"}

**Below Content Applies To:** Lync Server 2013

Import-CsLegacyConfiguration is used in conjunction with the Merge-CsLegacyTopology cmdlet to enable organizations to migrate from a previous version of Office Communications Server (either Office Communications Server 2007 R2 or Office Communications Server 2007) to Lync Server.
Import-CsLegacyConfiguration is used to import voice policies; location profiles (for instance, dial plans); voice routes; voice normalization rules; meeting policies; external access policies; archiving policies; presence policies; Communicator Web Access URL settings; and dial-in conferencing access numbers.

Before you can run Import-CsLegacyConfiguration, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
After installing the Compatibility interfaces package, you should next run Merge-CsLegacyTopology.
When Merge-CsLegacyTopology finishes, you should publish the merged topology by using Topology Builder.
After publishing the merged topology, you can then call Import-CsLegacyConfiguration.
The Import-CsLegacyConfiguration cmdlet uses WMI to read legacy data from the earlier version of Office Communications Server.
Import-CsLegacyConfiguration then takes the retrieved data and creates corresponding objects in Lync Server.
For example, for each voice policy found in your installation of Office Communications Server, a corresponding voice policy will be created in your new installation of Lync Server.

Import-CsLegacyConfiguration should be re-run whenever you make changes to any of the following Office Communications Server items: voice policies; location profiles; voice routes; voice normalization rules; meeting policies; external access policies; archiving policies; presence policies; Communicator Web Access URL settings; and dial-in conferencing access numbers.
By default, only new items added to your Office Communications Server topology will be imported when you re-run Import-CsLegacyConfiguration.
To import modified objects you must do two things.
First, confirm that no changes have been made to the corresponding item (for example, a voice policy) in the Lync Server copy of the configuration.
Second, run Import-CsLegacyConfiguration along with the ReplaceExisting parameter; this causes Import-CsLegacyConfiguration to import modified objects and to overwrite the corresponding object currently in Lync Server.
Note that objects deleted from the Communications Server 2007 R2 topology do not result in corresponding deletions in Lync Server.
You will need to manually remove those in Lync Server.

It's important to know that the Move-CsLegacyUser cmdlet relies on information imported by Import-CsLegacyConfiguration.
That means that, when running Move-CsLegacyUser, you might receive an error message telling you that you must run Import-CsLegacyConfiguration before proceeding.
If that happens you must re-run Import-CsLegacyConfiguration before you will be able to move the legacy user.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Import-CsLegacyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Import-CsLegacyConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

The Import-CsLegacyConfiguration cmdlet is used in conjunction with the Merge-CsLegacyTopology cmdlet to enable organizations to migrate from a previous version of Office Communications Server (either Office Communications Server 2007 R2 or Office Communications Server 2007) to Skype for Business Server 2015.
The Import-CsLegacyConfiguration cmdlet is used to import voice policies; location profiles (for instance, dial plans); voice routes; voice normalization rules; meeting policies; external access policies; archiving policies; presence policies; Communicator Web Access URL settings; and dial-in conferencing access numbers.

Before you can run the Import-CsLegacyConfiguration cmdlet, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
After installing the Compatibility interfaces package, you should next run the Merge-CsLegacyTopology cmdlet.
When the Merge-CsLegacyTopology cmdlet finishes, you should publish the merged topology by using Topology Builder.
After publishing the merged topology, you can then call the Import-CsLegacyConfiguration cmdlet.
The Import-CsLegacyConfiguration cmdlet uses WMI to read legacy data from the earlier version of Office Communications Server.
The Import-CsLegacyConfiguration cmdlet then takes the retrieved data and creates corresponding objects in Skype for Business Server 2015.
For example, for each voice policy found in your installation of Office Communications Server, a corresponding voice policy will be created in your new installation of Skype for Business Server 2015.

The Import-CsLegacyConfiguration cmdlet should be re-run whenever you make changes to any of the following Office Communications Server items: voice policies; location profiles; voice routes; voice normalization rules; meeting policies; external access policies; archiving policies; presence policies; Communicator Web Access URL settings; and dial-in conferencing access numbers.
By default, only new items added to your Office Communications Server topology will be imported when you re-run the Import-CsLegacyConfiguration cmdlet.
To import modified objects you must do two things.
First, confirm that no changes have been made to the corresponding item (for example, a voice policy) in the Skype for Business Server 2015 copy of the configuration.
Second, run the Import-CsLegacyConfiguration cmdlet along with the ReplaceExisting parameter; this causes the Import-CsLegacyConfiguration cmdlet to import modified objects and to overwrite the corresponding object currently in Skype for Business Server 2015.
Note that objects deleted from the Communications Server 2007 R2 topology do not result in corresponding deletions in Skype for Business Server 2015.
You will need to manually remove those in Skype for Business Server 2015.

It's important to know that the Move-CsLegacyUser cmdlet relies on information imported by the Import-CsLegacyConfiguration cmdlet.
That means that, when running the Move-CsLegacyUser cmdlet, you might receive an error message telling you that you must run the Import-CsLegacyConfiguration cmdlet before proceeding.
If that happens you must re-run the Import-CsLegacyConfiguration cmdlet before you will be able to move the legacy user.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Import-CsLegacyConfiguration
```

The command shown in Example 1 merges voice policies and other settings from Communications Server 2007 or Communications Server 2007 R2 with an installation of Lync Server.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 merges voice policies and other settings from Communications Server 2007 or Communications Server 2007 R2 with an installation of Lync Server.

Import-CsLegacyConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 merges voice policies and other settings from Communications Server 2007 or Communications Server 2007 R2 with an installation of Skype for Business Server 2015.

Import-CsLegacyConfiguration

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Import-CsLegacyConfiguration -ReplaceExisting
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the ReplaceExisting parameter is included.
This parameter instructs the cmdlet to use the imported data to resolve name collisions.
For example, suppose you try to import a voice route named LocalRoute, and a voice route by that name already exists in your Lync Server installation.
Because you included the ReplaceExisting parameter, the Lync Server route will be replaced by the voice route being imported.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the ReplaceExisting parameter is included.
This parameter instructs the cmdlet to use the imported data to resolve name collisions.
For example, suppose you try to import a voice route named LocalRoute, and a voice route by that name already exists in your Lync Server installation.
Because you included the ReplaceExisting parameter, the Lync Server route will be replaced by the voice route being imported.

Import-CsLegacyConfiguration -ReplaceExisting

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the ReplaceExisting parameter is included.
This parameter instructs the cmdlet to use the imported data to resolve name collisions.
For example, suppose you try to import a voice route named LocalRoute, and a voice route by that name already exists in your Skype for Business Server 2015 installation.
Because you included the ReplaceExisting parameter, the Skype for Business Server 2015 route will be replaced by the voice route being imported.

Import-CsLegacyConfiguration -ReplaceExisting

## PARAMETERS

### -ReplaceExisting
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If present, this parameter instructs Import-CsLegacyConfiguration to overwrite any previously imported policies or settings that have changed since the last time the cmdlet was run.



**Below Content Applies To:** Skype for Business Server 2015

If present, this parameter instructs the Import-CsLegacyConfiguration cmdlet to overwrite any previously imported policies or settings that have changed since the last time the cmdlet was run.



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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\ImportConfiguration.html"

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
None.
Import-CsLegacyConfiguration does not accept pipelined input.

###  
None.
The Import-CsLegacyConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Import-CsLegacyConfiguration does not return any objects or values.

###  
The Import-CsLegacyConfiguration cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/bd688c08-abb8-4c78-8e1b-b330412d4422(OCS.14).aspx)

[Import-CsLegacyConferenceDirectory]()

[Merge-CsLegacyTopology]()

[Move-CsLegacyUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/bd688c08-abb8-4c78-8e1b-b330412d4422(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/bd688c08-abb8-4c78-8e1b-b330412d4422(OCS.16).aspx)

