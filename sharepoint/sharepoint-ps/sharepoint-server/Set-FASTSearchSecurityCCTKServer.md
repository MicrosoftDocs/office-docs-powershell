---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchSecurityCCTKServer
---

# Set-FASTSearchSecurityCCTKServer

## SYNOPSIS
Updates the CCTK server general setting.

## SYNTAX

```
Set-FASTSearchSecurityCCTKServer [[-Port] <Int32>] [[-Enable] <Boolean>]
 [[-GeneralSetting] <CCTKServerSetting>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the configuration information for the Content Connector Toolkit (CCTK) server general settings.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1---------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchSecurityCCTKServer -Port 13271 -Enable $true
```

This example updates the CCTK server port number and enables the CCTK server to accept requests.

## PARAMETERS

### -Port
The port number that the security manager listens to for handling CCTK requests.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
A Boolean flag to determine if the CCTK service will accept requests.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GeneralSetting
A CCTKServerSetting instance whose property values are used for the CCTKServerSetting being updated.

```yaml
Type: CCTKServerSetting
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 9999
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchSecurityCCTKServer](Get-FASTSearchSecurityCCTKServer.md)

