---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-TeamPicture
online version: 
schema: 2.0.0
---

# Set-TeamPicture

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Update the team picture.

Note: the command will return immediately, but the Teams application will not reflect the update immediately. 
The Teams application may need to be open for up to an hour before changes are reflected.

## SYNTAX

```
Set-TeamPicture -GroupId <String> -ImagePath <String>
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Set-TeamPicture -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -ImagePath c:\Image\TeamPictire.png
```

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ImagePath
File path and image (*.png,*.gif, *.jpg, or *.jpeg)

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

