---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpapplicationcustomizer
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Remove-PnPApplicationCustomizer
---

# Remove-PnPApplicationCustomizer

## SYNOPSIS
Removes a SharePoint Framework client side extension application customizer

## SYNTAX 

### Custom Action Id
```powershell
Remove-PnPApplicationCustomizer [-Identity <UserCustomActionPipeBind>]
                                [-Scope <CustomActionScope>]
                                [-Force [<SwitchParameter>]]
                                [-Web <WebPipeBind>]
                                [-Connection <PnPConnection>]
```

### Client Side Component Id
```powershell
Remove-PnPApplicationCustomizer -ClientSideComponentId <GuidPipeBind>
                                [-Scope <CustomActionScope>]
                                [-Force [<SwitchParameter>]]
                                [-Web <WebPipeBind>]
                                [-Connection <PnPConnection>]
```

## DESCRIPTION
Removes a SharePoint Framework client side extension application customizer by removing a user custom action from a web or sitecollection

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPApplicationCustomizer -Identity aa66f67e-46c0-4474-8a82-42bf467d07f2
```

Removes the custom action representing the client side extension registration with the id 'aa66f67e-46c0-4474-8a82-42bf467d07f2'.

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPApplicationCustomizer -ClientSideComponentId aa66f67e-46c0-4474-8a82-42bf467d07f2 -Scope web
```

Removes the custom action(s) being registered for a SharePoint Framework solution having the id 'aa66f67e-46c0-4474-8a82-42bf467d07f2' in its manifest from the current web.

## PARAMETERS

### -ClientSideComponentId
The Client Side Component Id of the SharePoint Framework client side extension application customizer found in the manifest for which existing custom action(s) should be removed

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: Client Side Component Id

Required: True
Position: Named
Accept pipeline input: False
```

### -Force
Use the -Force flag to bypass the confirmation question

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The id or name of the CustomAction representing the client side extension registration that needs to be removed or a CustomAction instance itself

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: UserCustomActionPipeBind
Parameter Sets: Custom Action Id

Required: False
Position: 0
Accept pipeline input: True
```

### -Scope
Define if the CustomAction representing the client side extension registration is to be found at the web or site collection scope. Specify All to allow deletion from either web or site collection (default).

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: CustomActionScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)