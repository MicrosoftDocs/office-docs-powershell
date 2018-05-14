---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsFileTransferFilterConfiguration
schema: 2.0.0
---

# New-CsFileTransferFilterConfiguration

## SYNOPSIS

Creates a new file transfer filter configuration.
File transfer filter configurations are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) using a Skype for Business Server client.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsFileTransferFilterConfiguration [-Identity] <XdsIdentity> [-Action <FileFilterAction>]
 [-Enabled <Boolean>] [-Extensions <PSListModifier>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

When sending instant messages, users can attach and send files to the other participants in the conversation.
Skype for Business Server can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using a Skype for Business Server client.

When you install Skype for Business Server, a single file transfer filter configuration (which is configured at the global scope) is created for you.
By default, the global configuration applies to all the users in your organization.
In addition, you can use the New-CsFileTransferFilterConfiguration cmdlet to create custom file transfer filter configurations for individual sites.
If a configuration exists for a given site then those file transfer settings will be applied to all the users in that site.
If no such collection exists for a site then the global settings will be applied instead.

Note that you cannot create new a file transfer filter configuration at the global scope; however, you can use the Set-CsFileTransferFilterConfiguration cmdlet to modify the global settings.
Likewise, you cannot create a new configuration for a site that already has one defined; if you try that, your command will fail.



## EXAMPLES


### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsFileTransferFilterConfiguration -Identity site:Redmond
```

In Example 1, the New-CsFileTransferFilterConfiguration cmdlet is used to create a new instant message file transfer filter configuration with the Identity site:Redmond.
Because no additional parameters were specified, the configuration will be created using the default values.



### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Add=".ps1"}
```

In this command, the New-CsFileTransferFilterConfiguration cmdlet is used to create a new file transfer filter configuration with the Identity site:Redmond.
Because the Extensions parameter has been specified, the new configuration will contain all the default values plus an additional file extension: .ps1.
This new extension is added by using the Extensions parameter and the list modifier Add followed by the file extension to be added.
(Note that you must include the period as part of the file extension.) To add multiple file extensions, simply separate those extensions by using commas: @{Add=".ps1",".ps2",".ps3"}



### -------------------------- EXAMPLE 3 -------------------------- 
```

New-CsFileTransferFilterConfiguration -Identity site:Redmond -Extensions @{Replace=".vbs",".ps1"}
```

In Example 3, the New-CsFileTransferFilterConfiguration cmdlet is used to create a new file transfer filter configuration with the Identity site:Redmond.
This example is similar to Example 2 except that the Replace list modifier has been used instead of the Add modifier.
This means that the complete set of file extensions will be replaced by the two specified file extensions: .vbs and .ps1.
In this case the only files blocked at the Redmond site will be .vbs and .ps1.


### -------------------------- EXAMPLE 4 -------------------------- 
```
New-CsFileTransferFilterConfiguration -Identity site:Redmond -Action "BlockAll"

$x = New-CsFileTransferFilterConfiguration -Identity site:Redmond -InMemory

$x.Action = "BlockAll"

Set-CsFileTransferFilterConfiguration -Instance $x
```

Example 4 demonstrates the use of the InMemory parameter to create a file transfer filter configuration that initially resides in memory only.
To do this the first command in the example uses the New-CsFileTransferFilterConfiguration cmdlet and the InMemory parameter to create a new file transfer filter configuration with the Identity site:Redmond.
At this point in time, the new settings exist only in memory; users in the Redmond site will still be governed by the global file transfer filter settings.

In the second command, the value of the Action property for this in-memory instance is set to BlockAll.
Finally, the third command in the example uses the Set-CsFileTransferFilterConfiguration cmdlet to create the new collection of settings and apply them to the Redmond site.

Note that this same task can be accomplished in one step with the following command:



## PARAMETERS

### -Identity
Unique identifier to be given to the file transfer filter configuration.
The Identity for the new configuration is simply the prefix "site:" followed by the site name.
For example, to create a new configuration for the Redmond site, you would use this syntax: `-Identity site:Redmond.`

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

### -Action
Determines the action to be taken if file transfer filtering is enabled.
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
If this parameter is set to True, files with the specified extensions (or all files, depending on the value of the Action property) cannot be transferred by a Skype for Business Server client.
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

List of file extensions that will be blocked.
If you attempt to use a Skype for Business Server client to transfer a file that has a file extension matching one of the extensions in this list, that transfer will be blocked and the file will not be transferred.
This list is ignored if Action is set to BlockAll (all file transfers are blocked) or if Enabled is set to False (no file transfers are blocked).

By default, the following file extensions are included in the Extensions property: .ade, .adp, .app, .asp, .bas, .bat, .cer, .chm, .cmd, .com, .cpl, .crt, .csh, .exe, .fxp, .grp, .hlp, .hta, .inf, .ins, .isp, .its, .js, .jse, .ksh, .lnk, .mad, .maf, .mag, .mam, .maq, .mar., mas., .mat, .mau, .mav, .maw, .mda, .mdb.
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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

## OUTPUTS

###  
The New-CsFileTransferFilterConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration object.

## NOTES

## RELATED LINKS

[Remove-CsFileTransferFilterConfiguration](Remove-CsFileTransferFilterConfiguration.md)

[Set-CsFileTransferFilterConfiguration](Set-CsFileTransferFilterConfiguration.md)

[Get-CsFileTransferFilterConfiguration](Get-CsFileTransferFilterConfiguration.md)

