---
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Reset-PnPMicrosoft365GroupExpiration.html
external help file: PnP.PowerShell.dll-Help.xml
title: Reset-PnPMicrosoft365GroupExpiration
---
 
# Reset-PnPMicrosoft365GroupExpiration

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Reset-PnPMicrosoft365GroupExpiration.md to change this file.


**Required Permissions**

  * Microsoft Graph API : One of Directory.ReadWrite.All, Group.ReadWrite.All

Renews the Microsoft 365 Group by extending its expiration with the number of days defined in the group expiration policy set on the Azure Active Directory

## SYNTAX 

```powershell
Reset-PnPMicrosoft365GroupExpiration -Identity <Microsoft365GroupPipeBind>
```

## DESCRIPTION

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Reset-PnPMicrosoft365GroupExpiration
```

Renews the Microsoft 365 Group by extending its expiration with the number of days defined in the group expiration policy set on the Azure Active Directory

## PARAMETERS

### -Identity
The Identity of the Microsoft 365 Group

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)[Documentation](https://docs.microsoft.com/graph/api/group-renew)

