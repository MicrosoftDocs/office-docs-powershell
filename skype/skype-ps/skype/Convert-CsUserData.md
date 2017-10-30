---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Convert-CsUserData
schema: 2.0.0
---

# Convert-CsUserData

## SYNOPSIS
Converts exported user data to the data format used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Convert-CsUserData -InputFile <String> -OutputFile <String> -TargetVersion <ConvertTarget>
 [-ConfDirectoryFilter <String>] [-Force] [-UserFilter <String>] [<CommonParameters>]
```

## DESCRIPTION
The Convert-CsUserData cmdlet takes data exported by using the Export-CsUserData cmdlet and then converts that data to the user data format used by Skype for Business Server.
In turn, that enables the Import-CsUserData cmdlet to import that data to the appropriate server version.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Convert-CsUserData"}`

Skype for Business Server Control Panel: The functions carried out by the Convert-CsUserData cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Convert-CsUserData -InputFile "C:\Logs\Lync2013Data.Zip" -OutputFile "C:\Logs\Lync2010Data.xml" -TargetVersion Lync2010
```

The command shown in Example 1 converts the user data stored in the file C:\Logs\Lync2013Data.zip to the user data format used in Lync Server 2010.
The converted data is stored in the XML file C:\Logs\Lync2010Data.xml.


### -------------------------- Example 2 --------------------------
```
Convert-CsUserData -InputFile "C:\Logs\Lync2013Data.Zip" -OutputFile "C:\Logs\Lync2010data.xml" -TargetVersion Lync2010 -UserFilter "kenmyer@litwareinc.com"
```

Example 2 shows how you can convert data for a single user; in this example, the user with the SIP address kenmyer@litwareinc.com.
This is done by including the UserFilter parameter followed by the user's SIP address (minus the sip: prefix).


## PARAMETERS

### -InputFile
Full path to the .ZIP file or .XML file containing the user data to be converted.
For example:

-InputFile "C:\Data\Lync2010.zip"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputFile
Full path to the file that will store the converted data.
If you are outputting the data using the Microsoft Lync Server 2010 format then the output file must use a .XML file extension; for example:

`-OutputFile "C:\Data\ConvertedLync2010Data.xml"`

If you are using the Microsoft Lync Server 2013 Preview format, the output file must use a .ZIP file extension:

`-OutputFile "C:\Data\ConvertedLyncData.zip"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetVersion
Indicates the format for the converted data.
Allowed values are:

- Lync2010
- Current

```yaml
Type: ConvertTarget
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfDirectoryFilter
Enables you to convert conference directory data.
To do this, include the ConfDirectoryFilter parameter and specify the Identity of the conference directory:

`-ConfDirectoryFilter 13`

You can retrieve conference directory Identities by using this command:

`Get-CsConferenceDirectory | Select-Object Identity, ServiceId`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserFilter
Enables you to convert data for a single user.
That user specified by using his or her SIP address, minus the sip: prefix.
For example:

`-UserFilter "kenmyer@litwareinc.com"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The Convert-CsUserData cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Convert-CsUserData cmdlet creates either XML or ZIP files, depending on whether the converted data is to be used with Lync Server or with Skype for Business Server.

## NOTES

## RELATED LINKS

[Export-CsUserData](Export-CsUserData.md)

[Import-CsUserData](Import-CsUserData.md)

[Sync-CsUserData](Sync-CsUserData.md)

[Update-CsUserData](Update-CsUserData.md)
