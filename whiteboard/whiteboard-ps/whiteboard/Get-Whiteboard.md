---
external help file: Microsoft.Whiteboard.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftWhiteboard
applicable: Microsoft Whiteboard
title: Get-Whiteboard
online version: 
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-Whiteboard

## SYNOPSIS

Gets one or more Whiteboards from the Microsoft Whiteboard service and returns them as objects.

## SYNTAX

### Get a specific Whiteboard

```powershell
Get-Whiteboard [-Token <AuthenticationResult>] -UserId <Guid> -WhiteboardId <Guid> [<CommonParameters>]
```

### Get all Whiteboards for a user

```powershell
Get-Whiteboard [-Token <AuthenticationResult>] -UserId <Guid> [<CommonParameters>]
```

## DESCRIPTION

Gets one or more Whiteboards from the Microsoft Whiteboard service and returns them as objects.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------

```
PS C:\>Get-Whiteboard -UserId 00000000-0000-0000-0000-000000000001
```

Get all of a user's Whiteboards.


## PARAMETERS

### -Token
The Azure AD bearer token corresponding to the specified credentials. If unspecified, a new token will be generated.

```yaml
Type:                        Microsoft.IdentityModel.Clients.ActiveDirectory.AuthenticationResult
Required:                    false
Position:                    named
Default value:               None               
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -UserId
Optional. The ID of the user account to query Whiteboards for. All Whiteboards this account has access to will be returned. 

```yaml
Type:                        Guid
Required:                    true
Position:                    named
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -WhiteboardId

Optional. The ID of a specific Whiteboard.

```yaml
Type:                        Guid
Required:                    true
Position:                    named
Default value:               None       
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -ForceAuthPrompt

Optional. Always prompt for auth. Use to ignore cached credentials.

```yaml
Type:                        SwitchParameter
Required:                    false
Position:                    named
Default value:               false       
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

For details on user IDs, see the [overview page](whiteboard.md).

## RELATED LINKS
