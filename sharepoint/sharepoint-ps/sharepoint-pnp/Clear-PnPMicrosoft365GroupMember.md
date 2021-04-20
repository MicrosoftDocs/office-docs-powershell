---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Clear-PnPMicrosoft365GroupMember.html
external help file: PnP.PowerShell.dll-help.xml
title: Clear-PnPMicrosoft365GroupMember
---
  
# Clear-PnPMicrosoft365GroupMember

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Clear-PnPMicrosoft365GroupMember.md to change this file.


**Required Permissions**

  * Microsoft Graph API : One of Directory.ReadWrite.All, Group.ReadWrite.All, GroupMember.ReadWrite.All

Removes all current members from a particular Microsoft 365 Group

## SYNTAX

```powershell
Clear-PnPMicrosoft365GroupMember -Identity <Microsoft365GroupPipeBind> [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Clear-PnPMicrosoft365GroupMember -Identity "Project Team"
```

Removes all the current members from the Microsoft 365 Group named "Project Team"

## PARAMETERS

### -Identity
The Identity of the Microsoft 365 Group to remove all members from

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)[Documentation](https://docs.microsoft.com/graph/api/group-delete-members)


