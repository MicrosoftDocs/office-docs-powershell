---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineaudiofile
applicable: Microsoft Teams
title: Get-CsOnlineAudioFile
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:

---

# Get-CsOnlineAudioFile

## SYNOPSIS
Returns information about a specific or all uploaded audio files of a given application type.

## SYNTAX

```powershell
Get-CsOnlineAudioFile [[-Identity] <string>] [-ApplicationId <OrgAutoAttendant | HuntGroup | TenantGlobal>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns information on a specific or all uploaded audio files of a given application type. If you are not specifying any parameters you will get information of all uploaded audio files with ApplicationId = TenantGlobal.

## EXAMPLES

### Example 1
```powershell
Get-CsOnlineAudioFile

```
```Output
Id                : 85364afb59a143fc9466979e0f34f749
FileName          : CustomMoH.mp3
ApplicationId     : TenantGlobal
MarkedForDeletion : False
```
This returns information about all uploaded audio files with ApplicationId = TenantGlobal.

### Example 2
```powershell
Get-CsOnlineAudioFile -ApplicationId HuntGroup -Identity dcfcc31daa9246f29d94d0a715ef877e

```
```Output
Id                : dcfcc31daa9246f29d94d0a715ef877e
FileName          : SupportCQ.mp3
ApplicationId     : HuntGroup
MarkedForDeletion : False
```
This cmdlet returns information about the audio file with Id dcfcc31daa9246f29d94d0a715ef877e and with ApplicationId = HuntGroup.

### Example 3
```powershell
Get-CsOnlineAudioFile -ApplicationId OrgAutoAttendant

```
```Output
Id                : 58083ae8bc9e4a66a6b2810b2e1f4e4e
FileName          : MainAAAnnouncement.mp3
ApplicationId     : OrgAutoAttendant
MarkedForDeletion : False
```
This cmdlet returns information about all uploaded audio files with ApplicationId = OrgAutoAttendant.

## PARAMETERS

### -ApplicationId
The ApplicationId parameter specifies the identifier for the application that was specified when audio file was uploaded. For example, if the audio file is used with an auto attendant, then it should specified as "OrgAutoAttendant".
If the audio file is used with a hunt group (call queue), then it needs to be specified as "HuntGroup". If the audio file is used for music on hold, the it needs to specified as "TenantGlobal".

If you are not specifying an ApplicationId it is assumed to be TenantGlobal.

Supported values:

- OrgAutoAttendant
- HuntGroup
- TenantGlobal

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: TenantGlobal
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Id of the specific audio file that you would like to see information about. If you are only specifying -Identity, the -ApplicationId it is assumed to be TenantGlobal.

If you need to see the information of a specific audio file with ApplicationId of OrgAutoAttendant or HuntGroup, you need to specify -ApplicationId with the corresponding value and -Identity with the Id of the audio file.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 2.4.0-preview or later.

If you call the cmdlet without having uploaded any audio files, with a non-existing Identity or with an illegal ApplicationId, you will receive a generic error message. In addition, the ApplicationId is case sensitive.

## RELATED LINKS
[Export-CsOnlineAudioFile](https://learn.microsoft.com/powershell/module/teams/export-csonlineaudiofile)

[Import-CsOnlineAudioFile](https://learn.microsoft.com/powershell/module/teams/import-csonlineaudiofile)

[Remove-CsOnlineAudioFile](https://learn.microsoft.com/powershell/module/teams/remove-csonlineaudiofile)
