---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Import-CsLegacyConferenceDirectory

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Import-CsLegacyConferenceDirectory enables you to import conference directories from Microsoft Office Communications Server 2007 R2 to Microsoft Lync Server 2010.
This helps provide interoperability between Lync Server 2010 and Office Communications Server 2007 R2.

Below Content Applies To: Lync Server 2013

Import-CsLegacyConferenceDirectory enables you to import conference directories from Microsoft Office Communications Server 2007 R2 to Lync Server.
This helps provide interoperability between Lync Server and Office Communications Server 2007 R2.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

The Import-CsLegacyConferenceDirectory cmdlet enables you to import conference directories from Microsoft Office Communications Server 2007 R2 to Skype for Business Server 2015.
This helps provide interoperability between Skype for Business Server 2015 and Office Communications Server 2007 R2.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Import-CsLegacyConferenceDirectory [-Report <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Import-CsLegacyConferenceDirectory is used in conjunction with the Merge-CsLegacyTopology cmdlet to enable organizations to migrate from Office Communications Server 2007 R2 to Lync Server 2010.
Import-CsLegacyConfiguration imports conferencing directories from  Communications Server 2007 R2 to Lync Server.

Before you can run Import-CsLegacyConferenceDirectory, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
(OCSWMIBC.msi can be found on the Lync Server 2010 installation DVD in the Setup folder.) After installing the Compatibility interfaces package, you should next run Merge-CsLegacyTopology.

When Merge-CsLegacyTopology finishes running, you can call Import-CsLegacyConferenceDirectory.
The Import-CsLegacyConferenceDirectory cmdlet first uses WMI to read legacy data from Communications Server 2007 R2, then takes the retrieved data and creates corresponding objects in Lync Server: for each conferencing directory found in your installation of Communications Server 2007 R2, a corresponding directory will be created in your new installation of Lync Server.

Import-CsLegacyConferenceDirectory should be rerun anytime conferences directories are added, deleted, or moved in the Communications Server 2007 R2 environment.
Import-CsLegacyConferenceDirectory should also be run anytime Merge-CsLegacyTopology is run; this helps to ensure the conference directories and the topology remain in sync.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Import-CsLegacyConferenceDirectory cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Import-CsLegacyConferenceDirectory"}

Below Content Applies To: Lync Server 2013

Import-CsLegacyConferenceDirectory is used in conjunction with the Merge-CsLegacyTopology cmdlet to enable organizations to migrate from Office Communications Server 2007 R2 to Lync Server.
Import-CsLegacyConfiguration imports conferencing directories from Communications Server 2007 R2 to Lync Server.

Before you can run Import-CsLegacyConferenceDirectory, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
(OCSWMIBC.msi can be found on the Lync Server installation DVD in the Setup folder.) After installing the Backward Compatibility interfaces package, you should next run Merge-CsLegacyTopology.

When Merge-CsLegacyTopology finishes running, you can call Import-CsLegacyConferenceDirectory.
The Import-CsLegacyConferenceDirectory cmdlet first uses WMI to read legacy data from Communications Server 2007 R2, then takes the retrieved data and creates corresponding objects in Lync Server: for each conferencing directory found in your installation of Communications Server 2007 R2, a corresponding directory will be created in your new installation of Lync Server.

Import-CsLegacyConferenceDirectory should be rerun anytime conferences directories are added, deleted, or moved in the Communications Server 2007 R2 environment.
Import-CsLegacyConferenceDirectory should also be run anytime Merge-CsLegacyTopology is run; this helps to ensure the conference directories and the topology remain in sync.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Import-CsLegacyConferenceDirectory cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Import-CsLegacyConferenceDirectory"}

Below Content Applies To: Skype for Business Server 2015

The Import-CsLegacyConferenceDirectory cmdlet is used in conjunction with the Merge-CsLegacyTopology cmdlet to enable organizations to migrate from Office Communications Server 2007 R2 to Skype for Business Server 2015.
The Import-CsLegacyConfiguration cmdlet imports conferencing directories from Communications Server 2007 R2 to Skype for Business Server 2015.

Before you can run the Import-CsLegacyConferenceDirectory cmdlet, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
(OCSWMIBC.msi can be found on the Skype for Business Server 2015 installation DVD in the Setup folder.) After installing the Backward Compatibility interfaces package, you should next run the Merge-CsLegacyTopology cmdlet.

When the Merge-CsLegacyTopology cmdlet finishes running, you can call the Import-CsLegacyConferenceDirectory cmdlet.
The Import-CsLegacyConferenceDirectory cmdlet first uses WMI to read legacy data from Communications Server 2007 R2, then takes the retrieved data and creates corresponding objects in Skype for Business Server 2015: for each conferencing directory found in your installation of Communications Server 2007 R2, a corresponding directory will be created in your new installation of Skype for Business Server 2015.

The Import-CsLegacyConferenceDirectory cmdlet should be rerun anytime conferences directories are added, deleted, or moved in the Communications Server 2007 R2 environment.
The Import-CsLegacyConferenceDirectory cmdlet should also be run anytime the Merge-CsLegacyTopology cmdlet is run; this helps to ensure the conference directories and the topology remain in sync.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Import-CsLegacyConferenceDirectory
```

The command shown in Example 1 imports conferencing directories from Communications Server 2007 R2 to Lync Server.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 imports conferencing directories from Communications Server 2007 R2 to Lync Server.

Import-CsLegacyConferenceDirectory

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 imports conferencing directories from Communications Server 2007 R2 to Skype for Business Server 2015.

Import-CsLegacyConferenceDirectory

## PARAMETERS

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\ImportDirectories.html"

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
None.
Import-CsLegacyConferenceDirectory does not accept pipelined input.

###  
None.
The Import-CsLegacyConferenceDirectory cmdlet does not accept pipelined input.

## OUTPUTS

###  
Import-CsLegacyConferenceDirectory does not return any objects or values.

###  
The Import-CsLegacyConferenceDirectory cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/5ecb9bf9-cbce-48a6-966c-ecbdac59cb3a(OCS.14).aspx)

[Import-CsLegacyConfiguration]()

[Merge-CsLegacyTopology]()

[Move-CsLegacyUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/5ecb9bf9-cbce-48a6-966c-ecbdac59cb3a(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/5ecb9bf9-cbce-48a6-966c-ecbdac59cb3a(OCS.16).aspx)

