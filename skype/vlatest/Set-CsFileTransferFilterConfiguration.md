---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsFileTransferFilterConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies a collection of file transfer filter configuration settings.
File transfer filter settings are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) by using Microsoft Lync Server 2010 clients.

**Below Content Applies To:** Lync Server 2013

Modifies a collection of file transfer filter configuration settings.
File transfer filter settings are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) by using Lync Server clients.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Modifies a collection of file transfer filter configuration settings.
File transfer filter settings are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) by using Skype for Business Server 2015 clients.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsFileTransferFilterConfiguration [[-Identity] <XdsIdentity>] [-Action <FileFilterAction>]
 [-Enabled <Boolean>] [-Extensions <PSListModifier>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsFileTransferFilterConfiguration [-Instance <PSObject>] [-Action <FileFilterAction>] [-Enabled <Boolean>]
 [-Extensions <PSListModifier>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When sending instant messages, users can attach files and send them to the other participants in the conversation.
Lync Server 2010 can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent from the client.

The ability of users to transfer files using Lync Server 2010 clients is determined by the file transfer filter configuration settings applied at the global or (optionally) the site scopes.
The Set-CsFileTransferFilterConfiguration cmdlet allows you to modify an existing file transfer filter configuration.
You can modify the list of extensions that will be blocked by adding or removing extensions, or by creating a new list altogether.
You can also use this cmdlet to change whether or not file transfer filtering is enabled, and at what level (block only the files with extensions matching those in the Extensions list, or block all files).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsFileTransferFilterConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsFileTransferFilterConfiguration"}

**Below Content Applies To:** Lync Server 2013

When sending instant messages, users can attach files and send them to the other participants in the conversation.
Lync Server can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent from the client.

The ability of users to transfer files using Lync Server clients is determined by the file transfer filter configuration settings applied at the global or (optionally) the site scopes.
The Set-CsFileTransferFilterConfiguration cmdlet allows you to modify an existing file transfer filter configuration.
You can modify the list of extensions that will be blocked by adding or removing extensions, or by creating a new list altogether.
You can also use this cmdlet to change whether or not file transfer filtering is enabled, and at what level (block only the files with extensions matching those in the Extensions list, or block all files).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsFileTransferFilterConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsFileTransferFilterConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

When sending instant messages, users can attach files and send them to the other participants in the conversation.
Skype for Business Server 2015 can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent from the client.

The ability of users to transfer files using Skype for Business Server 2015 clients is determined by the file transfer filter configuration settings applied at the global or (optionally) the site scopes.
The Set-CsFileTransferFilterConfiguration cmdlet allows you to modify an existing file transfer filter configuration.
You can modify the list of extensions that will be blocked by adding or removing extensions, or by creating a new list altogether.
You can also use this cmdlet to change whether or not file transfer filtering is enabled, and at what level (block only the files with extensions matching those in the Extensions list, or block all files).



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Enabled $False
```

The command shown in Example 1 disables file transfer filtering for the Redmond site (that is, the file transfer filtering configuration that has the Identity site:Redmond).
To carry out this task, the Enabled parameter is included in the command and is set to $False.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 disables file transfer filtering for the Redmond site (that is, the file transfer filtering configuration that has the Identity site:Redmond).
To carry out this task, the Enabled parameter is included in the command and is set to $False.

Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Enabled $False

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 disables file transfer filtering for the Redmond site (that is, the file transfer filtering configuration that has the Identity site:Redmond).
To carry out this task, the Enabled parameter is included in the command and is set to $False.

Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Enabled $False

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Add=".ps1"}
```

The preceding commands adds a new file extension (.ps1, the file extension for Windows PowerShell scripts) to the list of file extensions prohibited in the Redmond site.
To add the new file extension, Set-CsFileTransferFilterConfiguration uses the Extensions parameter and the Add list modifier.
The modifier adds the specified file extension--.ps1--to the list of prohibited extensions.
To add multiple extensions by using a single command, simply separate the file extensions using commas: @{Add=".ps1",".ps2",".ps3"}.
Note that you must include the period when specifying a file extension.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 add a new file extension (.ps1, the file extension for Windows PowerShell scripts) to the list of file extensions prohibited in the Redmond site.
To add the new file extension, Set-CsFileTransferFilterConfiguration uses the Extensions parameter and the Add list modifier.
The modifier adds the specified file extension--.ps1--to the list of prohibited extensions.
To add multiple extensions by using a single command, simply separate the file extensions using commas: @{Add=".ps1",".ps2",".ps3"}.
Note that you must include the period when specifying a file extension.

Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Add=".ps1"}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 add a new file extension (.ps1, the file extension for Windows PowerShell scripts) to the list of file extensions prohibited in the Redmond site.
To add the new file extension, the Set-CsFileTransferFilterConfiguration cmdlet uses the Extensions parameter and the Add list modifier.
The modifier adds the specified file extension--.ps1--to the list of prohibited extensions.
To add multiple extensions by using a single command, simply separate the file extensions using commas: @{Add=".ps1",".ps2",".ps3"}.
Note that you must include the period when specifying a file extension.

Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Add=".ps1"}

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration | Set-CsFileTransferFilterConfiguration -Extensions @{Add=".ps1"}
```

In Example 3, the .ps1 file extension is added to the Extensions list of all the file transfer filter configurations currently in use in the organization.
To do this, Get-CsFileTransferFilterConfiguration is first called, without any additional parameters, in order to return a collection of all the file transfer filter configurations currently in use.
That collection is then piped to Set-CsFileTransferFilterConfiguration, which adds the .ps1 file extension to each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the .ps1 file extension is added to the Extensions list of all the file transfer filter configurations currently in use in the organization.
To do this, Get-CsFileTransferFilterConfiguration is first called, without any additional parameters, in order to return a collection of all the file transfer filter configurations currently in use.
That collection is then piped to Set-CsFileTransferFilterConfiguration, which adds the .ps1 file extension to each item in the collection.

Get-CsFileTransferFilterConfiguration | Set-CsFileTransferFilterConfiguration -Extensions @{Add=".ps1"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the .ps1 file extension is added to the Extensions list of all the file transfer filter configurations currently in use in the organization.
To do this, the Get-CsFileTransferFilterConfiguration cmdlet is first called, without any additional parameters, in order to return a collection of all the file transfer filter configurations currently in use.
That collection is then piped to the Set-CsFileTransferFilterConfiguration cmdlet, which adds the .ps1 file extension to each item in the collection.

Get-CsFileTransferFilterConfiguration | Set-CsFileTransferFilterConfiguration -Extensions @{Add=".ps1"}

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Remove=".ps1"}
```

In the preceding example, the file extension .ps1 is removed from the list of extensions blocked by the file transfer filter configuration for the Redmond site.
This example is identical to Example 3 except that, instead of calling the Add list modifier to add an extension to the list, the Remove list modifier is called to remove an extension from that list.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the file extension .ps1 is removed from the list of extensions blocked by the file transfer filter configuration for the Redmond site.
This example is identical to Example 3 except that, instead of calling the Add list modifier to add an extension to the list, the Remove list modifier is called to remove an extension from that list.

Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Remove=".ps1"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the file extension .ps1 is removed from the list of extensions blocked by the file transfer filter configuration for the Redmond site.
This example is identical to Example 3 except that, instead of calling the Add list modifier to add an extension to the list, the Remove list modifier is called to remove an extension from that list.

Set-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Remove=".ps1"}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
$a = Get-CsFileTransferFilterConfiguration -Identity site:Redmond
$a.Extensions.Remove(".ps1")
Set-CsFileTransferFilterConfiguration -Instance $a
```

Example 5 performs the same action as Example 4: it removes the .ps1 extension from the list of file transfer filter extensions for the Redmond site.
However, in this case we first retrieve the file transfer filter configuration for site:Redmond and assign the output to the variable $a; $a now contains the configuration for the Redmond site.
Next, we retrieve the Extensions property of $a, which is the Extensions property of site:Redmond ($a.Extensions).
This property contains the list of file extensions.
Following the Extensions property is a call to the Remove method ($a.Extensions.Remove).
We pass the value .ps1 to the Remove method; this will remove that extension from the list in the Extensions property.
However, this has removed the extension only from the configuration stored in memory in the variable $a.
To make the change to the database, we need to call Set-CsFileTransferFilterConfiguration, passing $a to the Instance parameter.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 performs the same action as Example 4: it removes the .ps1 extension from the list of file transfer filter extensions for the Redmond site.
However, in this case we first retrieve the file transfer filter configuration for site:Redmond and assign the output to the variable $a; $a now contains the configuration for the Redmond site.
Next, we retrieve the Extensions property of $a, which is the Extensions property of site:Redmond ($a.Extensions).
This property contains the list of file extensions.
Following the Extensions property is a call to the Remove method ($a.Extensions.Remove).
We pass the value .ps1 to the Remove method; this will remove that extension from the list in the Extensions property.
However, this has removed the extension only from the configuration stored in memory in the variable $a.
To make the change to the database, we need to call Set-CsFileTransferFilterConfiguration, passing $a to the Instance parameter.

$a = Get-CsFileTransferFilterConfiguration -Identity site:Redmond

$a.Extensions.Remove(".ps1")

Set-CsFileTransferFilterConfiguration -Instance $a

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 performs the same action as Example 4: it removes the .ps1 extension from the list of file transfer filter extensions for the Redmond site.
However, in this case we first retrieve the file transfer filter configuration for site:Redmond and assign the output to the variable $a; $a now contains the configuration for the Redmond site.
Next, we retrieve the Extensions property of $a, which is the Extensions property of site:Redmond ($a.Extensions).
This property contains the list of file extensions.
Following the Extensions property is a call to the Remove method ($a.Extensions.Remove).
We pass the value .ps1 to the Remove method; this will remove that extension from the list in the Extensions property.
However, this has removed the extension only from the configuration stored in memory in the variable $a.
To make the change to the database, we need to call the Set-CsFileTransferFilterConfiguration cmdlet, passing $a to the Instance parameter.

$a = Get-CsFileTransferFilterConfiguration -Identity site:Redmond

$a.Extensions.Remove(".ps1")

Set-CsFileTransferFilterConfiguration -Instance $a

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier of the file transfer configuration you want to modify.
This value will be either global or site:\<site name\>, where \<site name\> is the name of the site to which the settings apply, such as site:Redmond.

If this parameter is not specified, then Set-CsFileTransferFilterConfiguration will, by default, update the global settings.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier of the file transfer configuration you want to modify.
This value will be either global or site:\<site name\>, where \<site name\> is the name of the site to which the settings apply, such as site:Redmond.

If this parameter is not specified, then the Set-CsFileTransferFilterConfiguration cmdlet will, by default, update the global settings.



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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This object must be of type FileTransferFilterConfiguration and can be retrieved by calling the Get-CsFileTransferFilterConfiguration cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Action
Determines the action to be taken if this file transfer filter configuration is enabled.
If set to BlockAll then all file transfers will be prohibited, regardless of file extension.
If set to Block (the default value) file transfers will be allowed unless the file extension appears as one of the prohibited file types listed in the Extensions property.

To allow unrestricted file transfers (that is, to allow users to exchange any type of file, regardless of file extension), set the Enabled property of this policy to False.

```yaml
Type: FileFilterAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Enables or disables file transfer filtering.
If this parameter is set to True, files with the specified extensions (or all files, depending on the value of the Action property) cannot be transferred from the client.
If this parameter is set to False, any file can be transferred.

Default: True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Extensions
**Below Content Applies To:** Lync Server 2010

List of file extensions that will be blocked.
If you attempt to use a Lync Server 2010 client to transfer a file that has a file extension matching one of the extensions in this list, that transfer will be blocked and the file will not be transferred.
This list is ignored if Action is set to BlockAll (all file transfers are blocked) or if Enabled is set to False (no file transfers are blocked).

By default, the following file extensions are included in the Extensions property Default: .ade, .adp, .app, .asp, .bas, .bat, .cer, .chm, .cmd, .com, .cpl, .crt, .csh, .exe, .fxp, .grp, .hlp, .hta, .inf, .ins, .isp, .its, .js, .jse, .ksh, .lnk, .mad, .maf, .mag, .mam, .maq, .mar., mas., .mat, .mau, .mav, .maw, .mda, .mdb.
.mde, .mdt, .mdw, .mdz, .msc, .msi, .msp, .mst, .ocx, .ops, .pcd, .pif, .pl, .pnp, .prf, .prg, .pst, .reg, .scf, .scr, .sct, .shb, .shs, .tmp, .url, .vb, .vbe, .vbs, .vsd, .vsmacros, .vss, .vst, .vsw, .ws, .wsc.
.wsf, .wsh



**Below Content Applies To:** Lync Server 2013

List of file extensions that will be blocked.
If you attempt to use a Lync Server client to transfer a file that has a file extension matching one of the extensions in this list, that transfer will be blocked and the file will not be transferred.
This list is ignored if Action is set to BlockAll (all file transfers are blocked) or if Enabled is set to False (no file transfers are blocked).

By default, the following file extensions are included in the Extensions property Default: .ade, .adp, .app, .asp, .bas, .bat, .cer, .chm, .cmd, .com, .cpl, .crt, .csh, .exe, .fxp, .grp, .hlp, .hta, .inf, .ins, .isp, .its, .js, .jse, .ksh, .lnk, .mad, .maf, .mag, .mam, .maq, .mar., mas., .mat, .mau, .mav, .maw, .mda, .mdb.
.mde, .mdt, .mdw, .mdz, .msc, .msi, .msp, .mst, .ocx, .ops, .pcd, .pif, .pl, .pnp, .prf, .prg, .pst, .reg, .scf, .scr, .sct, .shb, .shs, .tmp, .url, .vb, .vbe, .vbs, .vsd, .vsmacros, .vss, .vst, .vsw, .ws, .wsc.
.wsf, .wsh



**Below Content Applies To:** Skype for Business Server 2015

List of file extensions that will be blocked.
If you attempt to use a Skype for Business Server 2015 client to transfer a file that has a file extension matching one of the extensions in this list, that transfer will be blocked and the file will not be transferred.
This list is ignored if Action is set to BlockAll (all file transfers are blocked) or if Enabled is set to False (no file transfers are blocked).

By default, the following file extensions are included in the Extensions property Default: .ade, .adp, .app, .asp, .bas, .bat, .cer, .chm, .cmd, .com, .cpl, .crt, .csh, .exe, .fxp, .grp, .hlp, .hta, .inf, .ins, .isp, .its, .js, .jse, .ksh, .lnk, .mad, .maf, .mag, .mam, .maq, .mar., mas., .mat, .mau, .mav, .maw, .mda, .mdb.
.mde, .mdt, .mdw, .mdz, .msc, .msi, .msp, .mst, .ocx, .ops, .pcd, .pif, .pl, .pnp, .prf, .prg, .pst, .reg, .scf, .scr, .sct, .shb, .shs, .tmp, .url, .vb, .vbe, .vbs, .vsd, .vsmacros, .vss, .vst, .vsw, .ws, .wsc.
.wsf, .wsh



```yaml
Type: PSListModifier
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
Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration object.
Accepts pipelined input of file transfer filter configuration objects.

## OUTPUTS

###  
This cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2697d3a0-d920-4a1d-9adc-7a8c754d8977(OCS.14).aspx)

[New-CsFileTransferFilterConfiguration]()

[Remove-CsFileTransferFilterConfiguration]()

[Get-CsFileTransferFilterConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/2697d3a0-d920-4a1d-9adc-7a8c754d8977(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2697d3a0-d920-4a1d-9adc-7a8c754d8977(OCS.16).aspx)

